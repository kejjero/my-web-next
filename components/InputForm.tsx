import {Input} from "antd";
import s from "../scss/modules/contacts.module.scss";
import React, {forwardRef, useEffect, useState} from "react";
import type { InputRef } from 'antd';

const InputForm: any = (props) => {

    return(
        <Input
            className={s.contacts__input}
            {...props}
        />
    )
}

export default InputForm;