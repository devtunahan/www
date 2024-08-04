import React, { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import withSoundEffects from '../withSoundEffects'; // Adjust the path if needed

function OneToOne(props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const handleClick = async () => {
    // Trigger the calendar popup
    const cal = await getCalApi({ namespace: '15min' });
    cal('ui', {
      styles: { branding: { brandColor: '#000000' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  };

  return (
    <div
      className="relative bg-[#212121] text-white p-6 rounded-lg flex-grow basis-[80%] min-w-[150px] h-40 transition-transform transform hover:scale-105 flex items-center justify-center cursor-pointer"
      onClick={handleClick} // Open calendar on div click
      {...props} // Apply sound effects and other props here
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="w-32 h-32 text-gray-500 opacity-20 absolute"
        />
        <button
          data-cal-namespace="15min"
          data-cal-link="tunahan/15min"
          data-cal-config='{"layout":"month_view"}'
          className="relative z-10 text-xl font-bold"
        >
          1:1 Call
        </button>
      </div>
    </div>
  );
}

export default withSoundEffects(OneToOne);
