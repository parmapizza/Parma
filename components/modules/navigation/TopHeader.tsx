
import CompanyData from '@/config/CompanyData';

const TopHeader = () => {
  return (
    <div className='bg-yellow-400 text-sm z-50' id='1'>
      <div className="flex gap-3 justify-center items-center py-1 text-xs">
        <p><span  className="font-semibold">{CompanyData.topHeader}</span></p>
        <h2 className="font-extrabold">{CompanyData.companyName}</h2>
        <p>Telefon: <span className="font-semibold">{CompanyData.phone}</span></p>
      </div>
    </div>
  )
}

export default TopHeader
