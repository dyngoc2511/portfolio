const https = require('https');
https.get('https://docs.google.com/presentation/d/1q-v6eRTA9DMrvlN_zryuJCFGWewT8JwQ/htmlpresent', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').substring(0, 5000));
  });
});
