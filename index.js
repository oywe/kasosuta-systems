const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Host ヘッダからサブドメイン部分を取得
  const host = req.headers.host; // ex: user1.kasos.f5.si
  const subdomain = host.split('.')[0]; // user1
  console.log("サブドメイン:", subdomain);

  req.subdomain = subdomain; // reqオブジェクトにセット
  next();
});

app.get('/subdomains', (req, res) => {
  res.send(`このページのサブドメインは: ${req.subdomain}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
