import contacts from "../scss/modules/contacts.module.scss"
import TopSection from "../components/TopSection"
import hash from "../images/hash.svg"
import Image from "next/image"
import React, {memo, useEffect, useRef, useState} from "react"
import {motion} from "framer-motion"
import s from "../scss/modules/contacts.module.scss"
import 'antd/dist/antd.css'
import {Form, Input, Popover, message} from 'antd'
import {Button} from 'antd'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import {config} from "../config";


const Contacts: React.FC = () => {
  const {TextArea} = Input
  const form = useRef(null)
  const [open, setOpen] = useState(false)
  const key = 'updatable'
  const antForm = useRef(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [pushDate, setPushDate] = useState(null)

  useEffect(() => {
    let date
    if (pushDate) {
      date = pushDate
    } else {
      date = JSON.parse(localStorage.getItem('dt'))
    }
    if (date) {
      const moveSeconds = Math.round((Number(date) + 600000  - new Date().getTime()) / 1000)
      console.log(moveSeconds)
      moveSeconds > 600 ? setTimeLeft(0) : setTimeLeft(moveSeconds)
    }
  },[pushDate])

  const hide = () => {
    setOpen(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
    },1000)
    return () => clearInterval(interval)
  },[timeLeft])


  const getPadTime = (time) => time.toString().padStart(2, 0)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = getPadTime(timeLeft - minutes * 60)

  const sectionAnimation = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.1, ease: [0, 0.2, 0.5, 0.8], duration: 1.5, type:"spring"}
    })
  }

  const onFinish = (value) => {
    if (value) {
      setOpen(!open)
    }
  }

  const setMessage = async () => {
    hide()
    message.open({
      key,
      type: 'loading',
      content: 'Загрузка...',
    })
    emailjs.sendForm(
      config.SERVICE_KEY,
      config.TEMPLATE_KEY,
      form.current.children[0],
      config.PUBLIC_KEY
    )
      .then(() => {
        message.open({
          key,
          type: 'success',
          content: 'Сообщение отправлено!',
          duration: 2,
        })
      })
      .then(() => {
        localStorage.setItem('dt', JSON.stringify(new Date().getTime()))
        setPushDate(Number(JSON.parse(localStorage.getItem('dt'))))
        resetForm()
      })
      .catch(() => {
        message.open({
          key,
          type: 'error',
          content: 'Произошла ошибка :(',
          duration: 2,
        })
      })
  }

  const resetForm = () => {
    antForm?.current?.resetFields()
  }

  const FormCaptcha = memo(() => {
    const recaptchaRef = React.useRef<HTMLFormElement | null>(null)
    const [activeAcceptButton, setActiveAcceptButton] = useState<boolean>(false)


    const onChangeWithReCAPTCHA = (value) => {
      if (value) {
        setActiveAcceptButton(true)
      }
    }

    return (
      <form className={contacts.captcha}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey='6LeRuWokAAAAABb0UkVPdwRaZ_Pa7jx5b_ruPjTS'
          onChange={onChangeWithReCAPTCHA}
        />
        <div className={contacts.captcha__buttons}>
          <Button htmlType='button' type="primary" disabled={!activeAcceptButton} onClick={() => setMessage()}>Отправить</Button>
          <Button htmlType='button' type="default" onClick={hide}>Отмена</Button>
        </div>
      </form>
    )
  })


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
      className={contacts.contacts}
    >
      <div className={contacts.contacts__hash}>
        <Image src={hash} draggable={false}/>
      </div>
      <motion.div
        custom={1}
        variants={sectionAnimation}
        className={contacts.contacts__wrapper}
        id="contacts"
      >
        <TopSection title="Контакты" subtitle="открыт к сотрудничеству"/>
        <span ref={form}>
          <Form
            ref={antForm}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete='true'
            className={contacts.contacts__form}
          >
                    <label className={contacts.contacts__label}>
                        <div className={s.contacts__inputWrapper}>
                            <span className={s.contacts__inputSpan}>Почта</span>
                            <Form.Item
                              name="email"
                              rules={[{required: true, message: 'Некорректная почта', type: 'email'}]}
                            >
                                <Input
                                  className={s.contacts__input}
                                  size="large"
                                  type="email"
                                  placeholder="name@mail.ru"
                                  title="Email"
                                  name="email"
                                />
                            </Form.Item>
                        </div>
                        <div className={s.contacts__inputWrapper}>
                            <span className={s.contacts__inputSpan}>Тема сообщения</span>
                            <Form.Item
                              name="title"
                              rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
                            >
                                <Input
                                  className={s.contacts__input}
                                  size="large"
                                  type="text"
                                  placeholder="Сотрудничество"
                                  title="Title"
                                  name='title'
                                  maxLength={30}
                                />
                            </Form.Item>
                        </div>
                    </label>
                    <div className={s.contacts__inputWrapper}>
                        <span className={s.contacts__inputSpan}>Сообщение</span>
                        <Form.Item
                          name="message"
                          rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
                        >
                            <TextArea
                              name='message'
                              size="large"
                              rows={7}
                              maxLength={400}
                              className={s.contacts__input}
                              placeholder="Текст сообщения"
                            />
                        </Form.Item>
                    </div>
              <Popover className={s.formCaptcha} content={<FormCaptcha />} title="Подтвердите, что вы не робот" open={open}>
                    <Form.Item style={{width: '100%'}}>
                            <Button
                              type="primary"
                              style={{width: "100%"}}
                              size="large"
                              htmlType='submit'
                              disabled={timeLeft !== 0 && timeLeft <= 600}
                            >
                              {
                                timeLeft !== 0 && timeLeft <= 600 ?
                                  `Осталось ${minutes > 0 ? minutes + ' мин. ' : ''} ${seconds} сек.`
                                  :
                                  `Отправить сообщение`
                              }
                        </Button>
                    </Form.Item>
              </Popover>
                </Form>
                </span>
      </motion.div>
    </motion.section>
  )
}

export default Contacts;