"use client"
import { DASHBOARD_DATA_LIST } from '@/utils/helper';
import Capital from './Capital';
import Calendar from './Calendar';
import ImageUpload from './ImageUpload';
import { useRouter, useSearchParams } from 'next/navigation';

const DashBoard = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "Question 1";
    const handleTabClick = (tab: string) => {
    const newUrl = `/dashboard?tab=${(tab)}`;
    router.push(newUrl); // Update URL without full page reload
  };
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'Question 1':
        return <Capital />;
      case 'Question 2':
        return <Calendar />;
      case 'Question 3':
        return <ImageUpload/>;
      default:
        return <p className="text-white text-2xl">Select a tab</p>;
    }
  };

  return (
    <div className="flex md:gap-20 gap-10 max-md:flex-wrap">
      <div className="bg-black w-[400px] md:h-screen h-[400px] max-md:w-full px-5 pt-5 pb-10 flex flex-col justify-between">
        <div>
            <p className="text-white text-3xl leading-normal font-normal pb-5 text-center">Welcome to dashboard</p>
            {DASHBOARD_DATA_LIST.map((tab, i) => (
                  <div key={i} className="cursor-pointer">
                    <p
                      className={`text-white text-2xl font-normal leading-normal text-center pb-2 ${
                        activeTab === tab ? 'font-bold underline' : ''
                      }`}
                       onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </p>
                  </div>
             
            ))}
        </div>
               <div className='mx-auto text-center'><button onClick={handleLogout} className='text-black bg-white border border-solid border-white py-2 px-3 rounded-lg text-base leading-normal font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-300'>logout</button></div>
             
          </div>
          

      {/* Dynamic Content Section */}
      <div className="w-full py-10">{renderComponent()}</div>
    </div>
  );
};

export default DashBoard;
