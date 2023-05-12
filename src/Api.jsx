import React, { Component } from "react";
import Axios from "axios";

class Api extends Component {
    server = 'http://192.168.8.182:8000';

    add_User(data) {
        const _api = '/addUser';
        return Axios.post(this.server + _api, data)
    }

    login_User(data) {
        const _api = '/loginUser';
        return Axios.post(this.server + _api, data)
    }
}

export default Api