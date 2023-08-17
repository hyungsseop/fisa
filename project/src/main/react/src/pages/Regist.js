<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
import React, { Component, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "./../App.css"
=======
import React, { Component } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "../App.css"
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js

class Regist extends Component {
  join = () => {
    const joinId = this.joinId.value;
    const joinName = this.joinName.value;
    const joinPw = this.joinPw.value;
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
    const joinConfirmPw = this.joinConfirmPw.value;
    const joinPhonenum = this.joinPhonenum.value;
    const birthDate = this.birthDate.value;
    const gender = this.gender.value;
    const regExp1 = /^[a-zA-Z0-9]{4,12}$/;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const regExp3 = /^[0-9]{10,14}$/;
    const regExp4 = /^[0-9]{6}$/;

    if (joinName === "" || joinName === undefined) {
      this.setState({ joinNameError: "이름을 입력해주세요." });
      this.joinName.focus();
      return;
    } else if (joinId === "" || joinId === undefined) {
      this.setState({ joinIdError: "아이디를 입력해주세요." });
      this.joinId.focus();
      return;
    } else if (!regExp1.test(joinId)) {
      this.setState({ joinIdError: "ID 양식에 맞게 입력해주세요. ID는 숫자와 영소문자 혼합 4~12자 입니다." });
=======
    const joinPhonenum = this.joinPhonenum.value;
    const regExp1 = /^[a-zA-Z0-9]{4,12}$/;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const regExp3 = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

    if (joinName === "" || joinName === undefined) {
      alert("이름을 입력해주세요.");
      this.joinName.focus();
      return;      
    } else if (joinId === "" || joinId === undefined) {
      alert("아이디를 입력해주세요.");
      this.joinId.focus();
      return;
    } else if (!regExp1.test(joinId)) {
      alert("아이디 형식이 올바르지 않습니다.");
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
      this.joinId.value = "";
      this.joinId.focus();
      return;
    } else if (joinPw === "" || joinPw === undefined) {
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
      this.setState({ joinPwError: "비밀번호를 입력해주세요." });
      this.joinPw.focus();
      return;
    } else if (!regExp2.test(joinPw)) {
      this.setState({ joinPwError: "비밀번호의 양식에 맞에 입력해주세요." });
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    } else if (joinConfirmPw !== joinPw) {
      this.setState({ joinPwConError: "위의 비밀번호와 틀립니다. 다시 입력해주세요." });
      this.joinConfirmPw.value = "";
      this.joinConfirmPw.focus();
      return;
    } else if (joinPhonenum === "" || joinPhonenum === undefined) {
      this.setState({ joinPhonenumError: "휴대전화 번호를 입력해주세요." });
      return;
    } else if (!regExp3.test(joinPhonenum)) {
      this.setState({ joinPhonenumError: "휴대전화 번호는 기호 없이 숫자만 입력해주세요." });
      this.joinPhonenum.value = "";
      this.joinPhonenum.focus();
      return;
    } else if (birthDate === "" || birthDate === undefined) {
      this.setState({ birthDateError: "생년월일을 입력해주세요." });
      this.birthDate.focus();
      return;
    } else if (!regExp4.test(birthDate)) {
      this.setState({ birthDateError: "EX) 230423 6개의 숫자로 입력해주세요." });
      this.birthDate.value = "";
      this.birthDate.focus();
      return;
    } else if (gender === "" || gender === undefined) {
      this.setState({ genderError: "성별을 입력해주세요. (남/여)" });
      return;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '', // 선택된 날짜 상태 초기화
      selectedGender: '', // 선택된 성별 상태 초기화
    };
  }
  


// 렌더해서 출력되는 화면
=======
      alert("비밀번호를 입력해주세요.");
      this.joinPw.focus();
      return;
    } else if (!regExp2.test(joinPw)) {
      alert("비밀번호 형식이 올바르지 않습니다.");
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    } else if (joinPhonenum === "" || joinPhonenum === undefined) {
      alert("전화번호를 입력해주세요.");
      return;
    } else if (!regExp3.test(joinPhonenum)) {
      alert("전화번호 형식이 올바르지 않습니다.");
      this.joinPhonenum.value = "";
      this.joinPhonenum.focus();
      return;
    }

  };
  
  state = {
    buttonDisplay: "True"
  };


  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

  return (
    <div>
      <Navbar>
      <Navbar.Brand href="/"><div style={{width: '100%', textAlign: 'center', color: '#0066FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON</div></Navbar.Brand>
      </Navbar>
    </div>
  );
  }

>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
  render() {
    const formStyle = {
      margin: 50,
    };
    const buttonStyle = {
      marginTop: 10,
    };

    return (
      <Form style={formStyle}>
        <div style={{ width: "100%", textAlign: "center", color: "black", fontSize: 32, fontFamily: "Inter", fontWeight: 900, lineHeight: 2, wordWrap: "break-word" }}>가입정보 입력</div>
        <br />
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
        <div style={{ width: "60%" , color: "black", fontSize: 20, fontFamily: "Roboto", fontWeight: 600, lineHeight: 3, wordWrap: "break-word",  margin: 'auto' }}>회원정보를 입력해주세요.</div>
        <Form.Group controlId="joinForm">
=======
        <div style={{ width: "100%", textAlign: "left", color: "black", fontSize: 16, fontFamily: "Roboto", fontWeight: 530, lineHeight: 3, wordWrap: "break-word" }}>회원정보를 입력해주세요.</div>
        <Form.Group controlId="joinForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
          <div>
            <Form.Control
              type="text"
              maxLength="20"
              ref={(ref) => (this.joinName = ref)}
              placeholder="이름"
              className="custom1-style"
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
              style={{background: '#F5F5F8', fontSize: 20, width: '60%', height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinNameError: '' })}
            />
            <div className="error-message">{this.state.joinNameError}</div>
=======
            />
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="12"
              ref={(ref) => (this.joinId = ref)}
              placeholder="아이디"
              className="custom1-style"
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinIdError: '' })}
            />
            <div className="error-message">{this.state.joinIdError}</div>
=======
            />
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinPw = ref)}
              placeholder="비밀번호"
              className="custom1-style"
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinPwError: '' })}
            />
            <div className="error-message">{this.state.joinPwError}</div>
=======
            />
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinConfirmPw = ref)}
              placeholder="비밀번호 확인"
              className="custom1-style"
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinConfirmPw: '' })}
            />
            <div className="error-message">{this.state.joinConfirmPwError}</div>
=======
            />
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
              maxLength="14"
              ref={(ref) => (this.joinPhonenum = ref)}
              placeholder="전화번호"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinPhonenumError: '' })}
            />
            <div className="error-message">{this.state.joinPhonenumError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="6"
              ref={(ref) => (this.birthDate = ref)}
              placeholder="생년월일"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ DabirthDateError: '' })}
            />
            <div className="error-message">{this.state.birthDateError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="1"
              ref={(ref) => (this.gender = ref)}
              placeholder="성별"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ genderError: '' })}
            />
            <div className="error-message">{this.state.genderError}</div>
          </div>
        
          <br></br>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="이용약관 및 개인정보 수집에 동의합니다." style={{ margin: 'auto', height: '60%', width: '60%', fontSize:'17px'}} />
          </Form.Group>
          <br />

          <Button
            className="custom1-button"
            style={{...buttonStyle, width: '60%', margin: 'auto', display:'block', fontSize: '25px'}}
=======
              maxLength="12"
              ref={(ref) => (this.joinPhonenum = ref)}
              placeholder="전화번호"
              className="custom1-style"
            />
          </div><br></br>
          <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="이용약관 및 개인정보 수집에 동의합니다." />
            </Form.Group>
          <br />
          <Button
            className="custom1-button"
            style={buttonStyle}
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js
            onClick={this.join}
            variant="primary"
            type="button"
            block
          >
            가입하기
          </Button>
          <br />
        </Form.Group>
      </Form>
    );
  }
}

<<<<<<< HEAD:project/src/main/react/src/pages/Regist.js
export default Regist;
=======
export default Regist;
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Regist.js