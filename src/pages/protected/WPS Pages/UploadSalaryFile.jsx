import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  Download,
  X,
  Eye,
} from "lucide-react";

export default function UploadSalaryFile() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [previewData, setPreviewData] = useState([
    {
      empId: "EMP001",
      name: "Ahmed Ali",
      salary: "5,000",
      allowances: "500",
      deductions: "0",
      netSalary: "5,500",
      status: "Valid",
    },
    {
      empId: "EMP002",
      name: "Fatima Hassan",
      salary: "6,500",
      allowances: "650",
      deductions: "0",
      netSalary: "7,150",
      status: "Valid",
    },
    {
      empId: "EMP003",
      name: "Mohammed Khalid",
      salary: "4,200",
      allowances: "420",
      deductions: "100",
      netSalary: "4,520",
      status: "Valid",
    },
  ]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    // Simulate file validation
    const errors = [];
    if (!file.name.match(/\.(xlsx|xls|csv)$/)) {
      errors.push("Invalid file format. Please upload Excel or CSV file.");
    }
    if (file.size > 10 * 1024 * 1024) {
      errors.push("File size exceeds 10MB limit.");
    }

    setValidationErrors(errors);

    if (errors.length === 0) {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        employees: 3,
      });
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setValidationErrors([]);
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-3">
          WPS
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-(--text-primary) mb-1">
          Upload Salary File
        </h1>
        <p className="text-xs sm:text-sm text-(--text-secondary) max-w-xl">
          Upload employee salary file for WPS processing
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-linear-to-r from-indigo-50 to-slate-50 dark:from-indigo-950/20 dark:to-slate-900/20 border border-indigo-200/60 dark:border-indigo-800/40">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <h3 className="font-semibold text-sm sm:text-base text-indigo-900 dark:text-indigo-100">
            File Requirements
          </h3>
        </div>
        <ul className="text-xs sm:text-sm text-indigo-800/90 dark:text-indigo-200/80 space-y-2 mb-4">
          <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Supported formats: Excel (.xlsx, .xls) or CSV (.csv)</li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Maximum file size: 10MB</li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Required columns: Employee ID, Name, Basic Salary, Allowances, Deductions</li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> All amounts should be in AED</li>
        </ul>
        <button type="button" className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition text-sm w-full sm:w-auto shadow-sm">
          <Download size={16} className="shrink-0" />
          Download Template
        </button>
      </div>

      {/* Upload Area */}
      <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 mb-6 sm:mb-8 shadow-sm">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 md:p-12 text-center transition min-h-50 flex items-center justify-center ${
            dragActive
              ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30"
              : "border-(--border) hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-(--bg-primary)"
          }`}
        >
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center max-w-full">
            <div className={`p-4 rounded-2xl mb-4 shrink-0 transition-colors ${dragActive ? "bg-indigo-500/20 text-indigo-600" : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"}`}>
              <Upload className="w-10 h-10 sm:w-12 sm:h-12" size={40} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-(--text-primary) mb-1 sm:mb-2 px-2">
              Drag and drop your salary file here
            </h3>
            <p className="text-xs sm:text-sm text-(--text-secondary) mb-4">
              or click to browse from your computer
            </p>
            <button type="button" className="px-6 py-2.5 rounded-xl bg-(--primary) text-white font-medium hover:opacity-90 transition text-sm shadow-sm">
              Select File
            </button>
          </div>
        </div>

        {/* Uploaded File Preview */}
        {uploadedFile && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                <FileText className="w-5 h-5" size={20} />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm sm:text-base text-emerald-900 dark:text-emerald-100 truncate">
                  {uploadedFile.name}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                  {uploadedFile.size} • {uploadedFile.employees} employees
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-2.5 rounded-xl hover:bg-emerald-500/15 text-emerald-600 transition self-end sm:self-auto shrink-0"
              aria-label="Remove file"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="mt-4 p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" size={20} />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base text-red-800 dark:text-red-200 mb-1">
                  Validation Errors
                </h4>
                <ul className="text-xs sm:text-sm text-red-700 dark:text-red-300 space-y-1">
                  {validationErrors.map((error, idx) => (
                    <li key={idx}>• {error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data Preview */}
      {uploadedFile && validationErrors.length === 0 && (
        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5 pb-3 border-b border-(--border)">
            <h3 className="text-base sm:text-lg font-bold text-(--text-primary)">
              File Preview
            </h3>
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <span className="text-xs sm:text-sm text-(--text-secondary)">
                {previewData.length} records found
              </span>
              <button className="p-2 rounded-xl hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition" aria-label="View">
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Mobile: card list */}
          <div className="block md:hidden space-y-3">
            {previewData.map((emp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-(--border) bg-(--bg-primary) hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors space-y-2"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs text-(--text-secondary)">ID</span>
                  <span className="text-sm font-medium text-(--text-primary)">{emp.empId}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs text-(--text-secondary)">Name</span>
                  <span className="text-sm text-(--text-primary)">{emp.name}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs text-(--text-secondary)">Net Salary</span>
                  <span className="text-sm font-semibold text-(--text-primary)">AED {emp.netSalary}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-(--text-secondary)">Status</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                    {emp.status}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-4 rounded-xl border-2 border-(--border) bg-(--bg-surface) flex justify-between items-center">
              <span className="text-sm font-semibold text-(--text-primary)">Total Payroll:</span>
              <span className="font-bold text-(--primary)">AED 17,170</span>
            </div>
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-(--border)">
            <table className="w-full min-w-160">
              <thead className="bg-(--bg-primary) border-b border-(--border)">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                    Employee ID
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                    Name
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                    Basic Salary
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                    Allowances
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                    Deductions
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                    Net Salary
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {previewData.map((emp, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                  >
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium text-(--text-primary)">
                      {emp.empId}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-(--text-primary)">
                      {emp.name}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right text-(--text-primary)">
                      AED {emp.salary}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right text-(--text-primary)">
                      AED {emp.allowances}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right text-(--text-primary)">
                      AED {emp.deductions}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right font-semibold text-(--text-primary)">
                      AED {emp.netSalary}
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">
                      <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-(--bg-primary) border-t-2 border-(--border)">
                <tr>
                  <td
                    colSpan="5"
                    className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-semibold text-(--text-primary) text-right"
                  >
                    Total Payroll:
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-bold text-(--primary) text-right">
                    AED 17,170
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 mt-5 pt-5 border-t border-(--border)">
            <button
              onClick={removeFile}
              className="px-5 sm:px-6 py-2.5 rounded-xl border border-(--border) text-(--text-primary) hover:bg-(--bg-primary) font-medium transition text-sm"
            >
              Cancel
            </button>
            <button className="px-5 sm:px-6 py-2.5 rounded-xl bg-(--primary) text-white font-medium hover:opacity-90 transition text-sm shadow-sm">
              Process Salary Batch
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
