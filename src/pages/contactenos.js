import React, { useEffect, useState, useRef } from 'react';
import 'react-notifications/lib/notifications.css';
import ReCAPTCHA from 'react-google-recaptcha';

import { getMessagesContactUs } from 'api/messagesContactUsAPI';
import { getGeneralInformation } from 'api/generalInformationAPI';
import { API_URL } from 'utils/constants';
import { getContactData } from 'api/contactAPI';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Seo from '@components/seo';

export default function Contactenos() {
  const captcha = useRef(null);
  const [captchaValid, setCaptchaValid] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState('');

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
  let handleTypeMessageChange = (value) => {
    setTypeMessage(value);
  };

  const [data, setData] = useState(null);
  const [dataLogo, setDataLogo] = useState(null);
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    (async () => {
      let responseLogo = await getGeneralInformation();
      setDataLogo(responseLogo);
      const responseContactData = await getContactData();
      setContactData(responseContactData);
      const responseMessagesContactUs = await getMessagesContactUs();
      setData(responseMessagesContactUs?.attributes);
    })();
  }, []);
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
        setTypeMessage('');
      }, 1000);
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, message: message, numberCellphone: numberCellphone, typeMessage: typeMessage }),
      });
    }
  };

  return (
    <>
    <Seo title="Contacto" description="Podrás contactanos"/>
    <div
      style={{ backgroundImage: `url(${contactData && API_URL + contactData[0]?.attributes?.Imagen_de_Fondo?.data?.attributes?.url})` }}
      className={'contactenos relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52'}
    >
      <div className="content-image">
        <div className="container block sm:grid grid-cols-1 lg:grid-cols-3 gap-4 center-data !w-full">
          <div className="col-span-2 w-full m-auto">
            <div className="grid justify-center">
              <h3 className="font-normal text-4xl sm:text-5xl">Contactanos</h3>
              <p className="font-bold text-lg mt-5">Tipo de mensaje</p>
              <div className="bg-purpledark rounded-md px-3 py-0 mt-2 w-auto sm:w-96">
                <p
                  className={`text-white text-base py-2 cursor-pointer ${typeMessage == 'Preguntas Frecuentes' && 'bg-purplelight'} duration-500 hover:bg-purplelight hover:duration-500`}
                  onClick={() => handleTypeMessageChange('Preguntas Frecuentes')}
                >
                  Preguntas Frecuentes
                </p>
                <hr className="text-white" />
                <p
                  className={`text-white text-base py-2 cursor-pointer duration-500  ${typeMessage == 'Felicitaciones' && 'bg-purplelight'} hover:bg-purplelight hover:duration-500`}
                  onClick={() => handleTypeMessageChange('Felicitaciones')}
                >
                  Felicitaciones
                </p>
                <hr className="text-white" />

                <p
                  className={`text-white text-base py-2 cursor-pointer duration-500  ${typeMessage == 'Quejas y reclamos' && 'bg-purplelight'} hover:bg-purplelight hover:duration-500`}
                  onClick={() => handleTypeMessageChange('Quejas y reclamos')}
                >
                  Quejas y reclamos
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-3 col-span-1 mt-5 sm:mt-0">
            <div className="flex mb-2">
              <p className="w-3/4 py-2 text-center !text-gray m-auto text-sm">{data?.Mensaje_Pagina_Contactenos}</p>
              {dataLogo && (
                <img alt="image" className=" logoresponsive top-1 m-auto w-24 h-20 sm:w-32 sm:h-24" src={`${API_URL}${dataLogo[0]?.attributes?.Logo_Principal?.data?.attributes?.url}`}/>
              )}
            </div>
            <form onSubmit={sendEmail}>
              <div className="columns-1">
                <div>
                  <label>
                    <span className="block text-sm font-bold text-gray font-bold">Nombre</span>
                    <input
                      maxLength="100"
                      type="text"
                      required
                      value={name}
                      onChange={handleNameChange}
                      className="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="block text-sm font-bold text-gray font-bold mt-2">Email</span>
                    <input
                      maxLength="100"
                      type="email"
                      value={email}
                      required
                      onChange={handleEmailChange}
                      className="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="block text-sm font-bold text-gray font-bold  mt-2">Celular</span>
                    <input
                      maxLength="100"
                      type="number"
                      value={numberCellphone}
                      required
                      onChange={handleNumberCellphoneChange}
                      className="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-1">
                <label>
                  <span className="block text-sm font-bold text-gray font-bold  mt-2">Mensaje</span>

                  <textarea
                    maxLength="500"
                    value={message}
                    required
                    onChange={handleMessageChange}
                    className="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                  ></textarea>
                </label>
              </div>
              <div className="my-2 text-center">
                <ReCAPTCHA sitekey="6LdcuFYkAAAAAJCdPeM9y4g-oZKpgiA8YBxdcF4o" ref={captcha} onChange={onChange} />
              </div>
              {captchaValid === false && <p className="text-xs !text-[#FF0000] text-center">Por favor acepta el Captcha</p>}

              <div className="w-full text-center my-2 ">
                <button className="rounded-3xl bg-purpledark duration-500 text-white px-8 py-2 hover:bg-purplelight hover:duration-500">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
    </>
  );
}
