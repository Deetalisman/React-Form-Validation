import { useState } from "react";
import { FaKeycdn } from "react-icons/fa";
import { FaBandAid } from "react-icons/fa";
import { FaTorah } from "react-icons/fa";
import image from "./img/icon-thank-you.svg";
export default function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}
function Main() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step, setStep] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [next, setNext] = useState(false);
  const [next1, setNext1] = useState(false);
  const [next2, setNext2] = useState(false);
  const [year, setYear] = useState(false);
  const [packed, setPacked] = useState(false);
  const [packed1, setPacked1] = useState(false);
  const [packed2, setPacked2] = useState(false);
  const [arcade, setArcade] = useState(false);
  const [advance, setAdvance] = useState(false);
  const [pro, setPro] = useState(false);

  function handleName(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
    console.log(number);
  }
  function handlePacked(e) {
    setPacked((packed) => !packed);
    console.log(packed);
  }
  function handlePacked1(e) {
    setPacked1((packed1) => !packed1);
    console.log(packed);
  }
  function handlePacked2(e) {
    setPacked2((packed2) => !packed2);
    console.log(packed);
  }
  function handleStep() {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep(false);
  }
  function handleStep11() {
    setStep(false);
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);
  }
  function handleStep21() {
    setStep(false);
    setStep1(false);
    setStep2(false);
    setStep3(true);
    setStep4(false);
  }
  function handleStep31() {
    setStep(false);
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(true);
  }
  function handleStep1(e) {
    e.preventDefault();
    setStep(false);
    setNext(true);
    setNext1(true);
    setNext2(true);
    console.log(next);
    console.log(name);
    console.log(email);
    console.log(number);
    if (email !== "" && name !== "" && number !== "") {
      setStep1(false);
      setStep2(true);
      setStep3(false);
      setStep4(false);
    } else {
      setStep1(step1);
    }
  }
  function handleStep2() {
    if (arcade || advance || pro) {
      setStep1(false);
      setStep2(false);
      setStep3(true);
      setStep4(false);
      setStep(false);
    } else {
      setStep2(true);
    }
  }
  function handleStep3() {
    if (packed || packed || packed2) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(true);
      setStep(false);
    } else {
      setStep3(true);
    }
  }
  function handleGoStep1() {
    setStep1(true);
    setStep2(false);
  }
  function handleGoStep2() {
    setStep2(true);
    setStep3(false);
  }
  function handleGoStep3() {
    setStep3(true);
    setStep4(false);
  }
  function handleConfirm() {
    setStep(true);
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
  }

  return (
    <div className="main">
      <Sidebar
        step1={step1}
        step2={step2}
        step3={step3}
        step4={step4}
        handleStep11={handleStep11}
        handleStep21={handleStep21}
        handleStep31={handleStep31}
        handleStep={handleStep}
      />
      {step1 && (
        <Mainbar1
          handleStep1={handleStep1}
          step1={step1}
          step2={step2}
          name={name}
          email={email}
          number={number}
          handleName={handleName}
          handleEmail={handleEmail}
          handleNumber={handleNumber}
          next={next}
          next1={next1}
          next2={next2}
        />
      )}
      {step2 && (
        <Mainbar2
          handleGoStep1={handleGoStep1}
          handleStep2={handleStep2}
          year={year}
          setYear={setYear}
          arcade={arcade}
          advance={advance}
          pro={pro}
          setArcade={setArcade}
          setAdvance={setAdvance}
          setPro={setPro}
        />
      )}
      {step3 && (
        <Mainbar3
          handleGoStep2={handleGoStep2}
          handleStep3={handleStep3}
          packed={packed}
          handlePacked={handlePacked}
          packed1={packed1}
          handlePacked1={handlePacked1}
          packed2={packed2}
          handlePacked2={handlePacked2}
          year={year}
        />
      )}
      {step4 && (
        <Mainbar4
          handleGoStep3={handleGoStep3}
          handleConfirm={handleConfirm}
          year={year}
        />
      )}
      {step && <Thankyou />}
    </div>
  );
}

function Sidebar({
  step1,
  step2,
  step3,
  step4,
  handleStep11,
  handleStep21,
  handleStep31,
  handleStep,
}) {
  return (
    <div className="sidebar">
      <div className="step">
        <p className={"num " + (step1 && "nums")} onClick={handleStep}>
          1
        </p>
        <div className="sub-step">
          <p className="ste">STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className="step">
        <p className={"num " + (step2 && "nums")} onClick={handleStep11}>
          2
        </p>
        <div className="sub-step">
          <p className="ste">STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </div>{" "}
      <div className="step">
        <p className={"num " + (step3 && "nums")} onClick={handleStep21}>
          3
        </p>
        <div className="sub-step">
          <p className="ste">STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className="step">
        <p className={"num " + (step4 && "nums")} onClick={handleStep31}>
          4
        </p>
        <div className="sub-step">
          <p className="ste">STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
}

function Mainbar1({
  handleStep1,
  name,
  email,
  number,
  handleName,
  handleEmail,
  handleNumber,
  next,
  next1,
  next2,
}) {
  return (
    <div className="mainbar">
      <h1>Personal Info</h1>
      <p className="main-p">
        Please provide your name,email address and phone number
      </p>
      <form onSubmit={handleStep1}>
        <label>
          {" "}
          <div className="label">
            {" "}
            <p>Name</p>
            <p className={"error-msg " + (next1 && name === "" && "error")}>
              Field is required
            </p>
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={handleName}
            className={next1 && name === "" ? "err-input" : "suc-input"}
          />
        </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
          <div className="label">
            {" "}
            <p>Email Address</p>
            <p className={"error-msg " + (next && email === "" && "error")}>
              Field is required
            </p>
          </div>
          <input
            type="text"
            placeholder="e.g. StephenKing@lorem.com"
            value={email}
            onChange={handleEmail}
            className={next && email === "" ? "err-input" : "suc-input"}
          />
        </label>
        <br></br>
        <br></br>
        <br></br>

        <label>
          <div className="label">
            {" "}
            <p>Phone Number </p>
            <p className={"error-msg " + (next2 && number === "" && "error")}>
              Field is required
            </p>
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={number}
            onChange={handleNumber}
            className={next2 && number === "" ? "err-input" : "suc-input"}
          />
        </label>
        <br></br>
        <button className="main1-but">Next Step</button>
      </form>
    </div>
  );
}

function Mainbar2({
  handleGoStep1,
  handleStep2,
  year,
  setYear,
  arcade,
  setArcade,
  advance,
  setAdvance,
  pro,
  setPro,
}) {
  return (
    <div className="mainbar">
      <h1>Select Your Plan</h1>
      <p className="main-p">You have the option of monthly or yearly billing</p>
      <div className="plans">
        <div
          className={"plan " + (arcade && "add-active")}
          onClick={() => setArcade((arcade) => !arcade)}
        >
          <div className="plan-img arc">
            <FaKeycdn id="arcade" />
          </div>
          <div>
            <p className="sub-plan1">Arcade</p>
            <p className="sub-plan2">{year ? "$90/yr" : "$9/yr"}</p>
            {year && <p className="sub-plan3">2 months free</p>}
          </div>
        </div>
        <div
          className={"plan " + (advance && "add-active")}
          onClick={() => setAdvance((advance) => !advance)}
        >
          <div className="plan-img adv">
            <FaBandAid id="arcade" />
          </div>
          <div>
            <p className="sub-plan1">Advanced</p>
            <p className="sub-plan2">{year ? "$120/yr" : "$12/yr"}</p>
            {year && <p className="sub-plan3">2 months free</p>}
          </div>
        </div>
        <div
          className={"plan " + (pro && "add-active")}
          onClick={() => setPro((pro) => !pro)}
        >
          <div className="plan-img pro">
            <FaTorah id="arcade" />
          </div>
          <div>
            <p className="sub-plan1">Pro</p>
            <p className="sub-plan2">{year ? "$150/yr" : "$15/yr"}</p>
            {year && <p className="sub-plan3">2 months free</p>}
          </div>
        </div>
      </div>
      <div className="mon-year">
        <p onClick={() => setYear(false)} className={!year && "month"}>
          Monthly
        </p>
        <p onClick={() => setYear(true)} className={year && "month"}>
          Year
        </p>
      </div>
      <div className="main2-but">
        <button className="main2-but1" onClick={handleGoStep1}>
          Go back
        </button>
        <button onClick={handleStep2} className="main1-but">
          Next Step
        </button>
      </div>
    </div>
  );
}

function Mainbar3({
  handleGoStep2,
  handleStep3,
  packed,
  handlePacked,
  packed1,
  packed2,
  handlePacked1,
  handlePacked2,
  year,
}) {
  return (
    <div className="mainbar">
      <h1>Pick add-ons</h1>
      <p className="main-p">Add-ons help enhance your gaming experience</p>
      <div className="adds">
        <div className={"add " + (packed && "add-active")}>
          <input
            type="checkbox"
            className="checkbox"
            value={packed}
            onChange={handlePacked}
          />
          <div className="add-detail">
            <div>
              <p className="add-detail-h">Online Service</p>
              <p className="add-detail-p ">Access to multiplayer games</p>
            </div>
            <p className="add-detail-p1">{year ? "+$10/yr" : "+$1/mo"}</p>
          </div>
        </div>
        <div className={"add " + (packed1 && "add-active")}>
          <input
            type="checkbox"
            className="checkbox"
            value={packed1}
            onChange={handlePacked1}
          />
          <div className="add-detail">
            <div>
              <p className="add-detail-h">Large storage</p>
              <p className="add-detail-p">Extra 1TB of cloud save</p>
            </div>
            <p className="add-detail-p1">{year ? "+$20/yr" : "+$2/mo"}</p>
          </div>
        </div>
        <div className={"add " + (packed2 && "add-active")}>
          <input
            type="checkbox"
            className="checkbox"
            value={packed2}
            onChange={handlePacked2}
          />
          <div className="add-detail">
            <div>
              <p className="add-detail-h">Customize Profile</p>
              <p className="add-detail-p">Custom theme on your profile</p>
            </div>
            <p className="add-detail-p1">{year ? "+$20/yr" : "+$2/mo"}</p>
          </div>
        </div>
      </div>
      <div className="main3-but ">
        <button className="main2-but1" onClick={handleGoStep2}>
          Go back
        </button>
        <button onClick={handleStep3} className="main1-but">
          Next Step
        </button>
      </div>
    </div>
  );
}

function Mainbar4({ handleGoStep3, handleConfirm, year }) {
  return (
    <div className="mainbar">
      <h1>Finishing Up</h1>
      <p className="main-p">
        Double-check everything looks OK before confirming
      </p>
      <div className="finishs">
        <div className="finish">
          <p>
            Arcade(monthly) <br></br>
            <span className="span">change</span>
          </p>
          <p>{year ? "$90/yr" : "$9/mo"}</p>
        </div>
        <div className="finish">
          <p>
            Online service<br></br>
            <span className="span">change</span>
          </p>
          <p>{year ? "$10/yr" : "$1/mo"}</p>
        </div>
        <div className="finish">
          <p>
            Larger storage<br></br>
            <span className="span">change</span>
          </p>
          <p>{year ? "$20/yr" : "$2/mo"}</p>
        </div>
      </div>
      <div className="total">
        <p>Total (per month)</p>
        <p className="tot-val">{year ? "$120/yr" : "$12/mo"}</p>
      </div>
      <div className="main4-but">
        <button className="main2-but1" onClick={handleGoStep3}>
          Go back
        </button>
        <button id="confirm" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

function Thankyou() {
  return (
    <div className="mainbar last">
      <img src={image} alt="image-thankyou" />
      <h1>Thank You!</h1>
      <p>
        Thanks for confriming your subscription! We hope you have fun using our
        platform.If you ever need support ,Please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
