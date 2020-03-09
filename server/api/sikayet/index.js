'use strict';

const express = require('express');
const router = express.Router();
const axios = require('axios');
const qs = require('qs');


router.get('/:token', async (req, res) => {
    const headers = {
        "content-type": "application/json",
        "Authorization": "bearer " + req.params.token,
    };
    await axios
        .get("https://api.sikayetvar.com/core/me", { headers: headers })
        .then(response => {
            res.json(response.data);
        })
        .catch(e => {
        });
})

router.post('/login', async (req, res) => {
    const data = {
        grant_type: 'password',
        client_id: 'sikayetvar',
        username: req.body.email,
        password: req.body.password,
        device_id: '1234'
      };
      const headers = {
        'content-type': 'application/x-www-form-urlencoded'
      }
    await axios
        .post("https://api.sikayetvar.com/auth-member/auth/login", qs.stringify({...data}), { headers: headers })
        .then(response => {
            res.json(response.data);
        })
        .catch(e => {
        });
})

module.exports = router;