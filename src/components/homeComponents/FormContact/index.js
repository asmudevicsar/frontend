import React, { useState, useEffect } from 'react';
import { getMessagesContactUs } from 'api/messagesContactUsAPI';

export default function FormContact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getMessagesContactUs();
      setData(response?.attributes);
    })();
  }, []);
  return (
    <div class="container grid-container grid grid-cols-5 pt-2 pb-8">
      <div class="item1 col-span-5 sm:col-span-1 m-auto">
        <img className="" src="http://localhost:3000/images/logoblanco.png" alt="logoimage" />
      </div>
      <div class="item2 col-span-5 sm:col-span-4 mt-8">
        <h3 className="text-center font-bold text-purpledark text-2xl w-3/4 m-auto">{data?.Mensaje_Pagina_Principal}</h3>
        <div className="container mt-10">
          <form>
            <div className="columns-1 sm:columns-3">
              <div>
                <label>
                  <span class="block text-sm font-bold text-purpledark font-bold">Nombre</span>
                  <input
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span class="block text-sm font-bold text-purpledark font-bold">Email</span>
                  <input
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span class="block text-sm font-bold text-purpledark font-bold">Celular</span>
                  <input
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                  />
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label>
                <span class="block text-sm font-medium text-purpledark font-bold">Mensaje</span>
                <textarea
                  class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                ></textarea>
              </label>
            </div>
            <div className="w-full text-center mt-6">
              <button className="rounded-3xl bg-purpledark duration-500 text-white px-8 py-2 hover:bg-purplelight hover:duration-500">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
