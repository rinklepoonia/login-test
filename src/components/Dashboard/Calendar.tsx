"use client";
import { InlineWidget} from "react-calendly";

const Calendar = () => {

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 container">
      {/* {rootElement && ( 
        <PopupWidget
          url="https://calendly.com/rinklepoonia889/30min?back=1&month=2025-02"
          rootElement={rootElement}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      )} */}
        <InlineWidget 
        url="https://calendly.com/rinklepoonia889/30min?back=1&month=2025-02" 
        styles={{ width: "100%", height: "700px" }} // Adjust height as needed
      />
    </div>
  );
};

export default Calendar;