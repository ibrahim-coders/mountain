import { toast } from 'react-toastify';

const Modal = () => {
  const handleButtonClick = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open('https://meet.google.com', '_blank');
    } else {
      toast.info(
        'Our consultation time is from 10:00 AM to 8:00 PM. Please visit during these hours.'
      );
    }
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2>Consultation Time</h2>
          <p>Our consultation hours are from 10:00 AM to 8:00 PM.</p>
          <button onClick={handleButtonClick} className="btn btn-primary mt-6">
            Click here for consultation
          </button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;