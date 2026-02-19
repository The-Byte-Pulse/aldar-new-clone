import { useState } from "react";
import BeneficiaryCard from "../../../components/app/BeneficiaryCard";
import beneficiaries from "../../../data/beneficiaries";
import { User, DollarSign, CheckCircle } from "lucide-react";

export default function NewTransaction() {

  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(1);

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [purpose, setPurpose] = useState("");
  const [reference, setReference] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const selectedUser = beneficiaries.find(b => b.id === selected);

  const handleNext = () => {

    if (step === 1 && !selected) {
      alert("Please select a beneficiary first");
      return;
    }

    if (step === 2) {
      if (!amount || amount <= 0 || !purpose || !paymentMethod || !transactionType) {
        Message("Please fill all required fields correctly");
        return;
      }
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="container-custom py-6">

      {/* Stepper */}
      <div className="card mb-6 flex justify-between items-center">

        {[1,2,3].map((num)=>(
          <div key={num} className={`flex flex-col items-center ${step >= num ? "" : "opacity-50"}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold 
              ${step >= num ? "bg-(--primary) text-white" : "bg-var(--border) text-(--text-secondary)"}`}>
              {num}
            </div>
            <p className="mt-2 text-sm font-medium">
              {num === 1 && "Beneficiary"}
              {num === 2 && "Details"}
              {num === 3 && "Review"}
            </p>
          </div>
        ))}

      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <User className="text-(--primary)" />
            <h2 className="text-lg font-semibold">Select Beneficiary</h2>
          </div>

          <div className="space-y-3">
            {beneficiaries.map((item) => (
              <BeneficiaryCard
                key={item.id}
                data={item}
                selected={selected === item.id}
                onSelect={setSelected}
              />
            ))}
          </div>

          <button onClick={handleNext} className="btn-primary mt-4">
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="card p-6 max-w-md mx-auto">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="text-(--primary)" /> Transaction Details
          </h2>

          <input
            type="number"
            placeholder="Amount (QAR)"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            className="input-primary w-full mb-3"
          />

          <select
            value={purpose}
            onChange={(e)=>setPurpose(e.target.value)}
            className="input-primary w-full mb-3"
          >
            <option value="">Select Purpose</option>
            <option>Family Support</option>
            <option>Education</option>
            <option>Business</option>
            <option>Medical</option>
            <option>Personal</option>
          </select>

          <input
            type="text"
            placeholder="Reference"
            value={reference}
            onChange={(e)=>setReference(e.target.value)}
            className="input-primary w-full mb-3"
          />

          <select
            value={paymentMethod}
            onChange={(e)=>setPaymentMethod(e.target.value)}
            className="input-primary w-full mb-3"
          >
            <option value="">Payment Method</option>
            <option>Bank Transfer</option>
            <option>Wallet</option>
            <option>Card</option>
          </select>

          <select
            value={transactionType}
            onChange={(e)=>setTransactionType(e.target.value)}
            className="input-primary w-full mb-3"
          >
            <option value="">Transaction Type</option>
            <option>Local</option>
            <option>International</option>
          </select>

          <textarea
            placeholder="Note (Optional)"
            value={note}
            onChange={(e)=>setNote(e.target.value)}
            className="input-primary w-full mb-4"
          />

          <div className="flex gap-3">
            <button onClick={handleBack} className="btn-secondary flex-1">
              Back
            </button>
            <button onClick={handleNext} className="btn-primary flex-1">
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="card p-6 max-w-md mx-auto">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="text-(--primary)" /> Review
          </h2>

          <div className="space-y-2">
            <p><strong>Beneficiary:</strong> {selectedUser?.name}</p>
            <p><strong>Account:</strong> {selectedUser?.account}</p>
            <p><strong>Amount:</strong> QAR {amount}</p>
            <p><strong>Purpose:</strong> {purpose}</p>
            <p><strong>Reference:</strong> {reference || "—"}</p>
            <p><strong>Payment:</strong> {paymentMethod}</p>
            <p><strong>Type:</strong> {transactionType}</p>
            <p><strong>Note:</strong> {note || "—"}</p>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={handleBack} className="btn-secondary flex-1">
              Back
            </button>
            <button
              onClick={()=>alert("Transaction Sent!")}
              className="btn-primary flex-1"
            >
              Send Money
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
