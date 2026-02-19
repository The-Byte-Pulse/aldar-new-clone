
const FundingTabs = ({Activetab , SetActiveTab}) => {
    const tabs = ["Bank Transfer" , "Cheque Deposit" , "Card Payement"]
  return (
     <div className="flex gap-2">
    {tabs.map((tab , index)=>(
    <button 
    key={index}
    onClick={()=>{SetActiveTab(index)}}
    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200'
    ${Activetab === index ? 'bg-blue-100 text-blue-900': "text-slate-500 hover:bg-slate-100"}`}
    >
     {tab}
    </button>
     ))}
    </div>
  )
}

export default FundingTabs
