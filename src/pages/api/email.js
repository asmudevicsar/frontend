import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, numberCellphone, typeMessage } = req.body;
  console.log('aaaaa=>', req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sergiocastillo7398@gmail.com',
      pass: 'uvkshjtlrwfggoox',
    },
  });
  const data = {
    from: email,
    to: 'sergiocastillo7398@gmail.com',
    subject: 'Notificación Sitio Web ASMUDEVICSAR',
    html: `<h2>${typeMessage ? typeMessage : 'Mensaje para ASMUDEVICSAR'}</h2>
        <p>Desde el sitio web enviaron el siguiente mensaje:</p>
        <p><strong>Mensaje: </strong> ${message && message}</p>
        <p><strong>Nombre remitente: </strong> ${name && name}</p>
        <p><strong>Correo remitente: </strong> ${email && email}</p>
        <p><strong>Celular remitente: </strong> ${numberCellphone && numberCellphone}</p>
      `,
  };

  transporter.sendMail(data, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
