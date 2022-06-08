import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-notifications/lib/notifications.css';
import { getMessagesContactUs } from 'api/messagesContactUsAPI';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function FormContact() {
  const captcha = useRef(null);
  const [captchaValid, setCaptchaValid] = useState(null);

  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('');
  const [message, setMessage] = useState('');

  let handleNameChange = (e) => {
    let inputHandle = e.target.value;
    setName(inputHandle);
  };
  let handleEmailChange = (e) => {
    let inputHandle = e.target.value;
    setEmail(inputHandle);
  };
  let handleNumberCellphoneChange = (e) => {
    let inputHandle = e.target.value;
    setNumberCellphone(inputHandle);
  };
  let handleMessageChange = (e) => {
    let inputHandle = e.target.value;
    setMessage(inputHandle);
  };
  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!captchaValid === true || !captcha.current.getValue()) {
      setCaptchaValid(false);
    } else {
      captcha.current.reset();
      NotificationManager.success('Enviado Correctamente');
      setTimeout(() => {
        setEmail('');
        setName('');
        setNumberCellphone('');
        setMessage('');
      }, 1000);
      /* const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, message: message, numberCellphone: numberCellphone }),
      }); */
    }
  };
  useEffect(() => {
    (async () => {
      const response = await getMessagesContactUs();
      setData(response?.attributes);
    })();
  }, []);
  return (
    <div className="container grid-container grid grid-cols-5 pt-2 pb-8">
      <div className="item1 col-span-5 sm:col-span-1 m-auto ">
        <img className="logoblanco" src="/images/logoblanco.png" alt="logoimage" />
      </div>
      <div className="item2 col-span-5 sm:col-span-4 mt-8">
        <h3 className="text-center font-bold text-purpledark text-xl sm:text-2xl w-3/4 m-auto">{data?.Mensaje_Pagina_Principal}</h3>
        <div className="container mt-4 sm:mt-10 px-4 xl:px-0">
          <form onSubmit={sendEmail}>
            <div className="columns-1 sm:columns-3">
              <div>
                <label>
                  <span className="block text-sm font-bold text-purpledark font-bold">Nombre</span>
                  <input
                    type="text"
                    maxLength="100"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span className="block text-sm font-bold text-purpledark font-bold">Email</span>
                  <input
                    type="email"
                    maxLength="100"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span className="block text-sm font-bold text-purpledark font-bold">Celular</span>
                  <input
                    type="number"
                    maxLength="100"
                    value={numberCellphone}
                    required
                    onChange={handleNumberCellphoneChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label>
                <span className="block text-sm font-medium text-purpledark font-bold">Mensaje</span>
                <textarea
                  maxLength="500"
                  required
                  value={message}
                  onChange={handleMessageChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                ></textarea>
              </label>
            </div>
            <div className="my-2 text-center m-auto w-full justify-center flex">
              <ReCAPTCHA sitekey="6LfzMkIgAAAAANClfIiTx2LhpzvAI9y3StyFfq4A" ref={captcha} onChange={onChange} />
            </div>
            {captchaValid === false && <p className="text-xs !text-[#FF0000] text-center">Por favor acepta el Captcha</p>}
            <div className="w-full text-center mt-6">
              <button className="rounded-3xl bg-purpledark duration-500 text-white px-8 py-2 hover:bg-purplelight hover:duration-500">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
