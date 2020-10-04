// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Header from '../header/header'
// import MiniH from '../header/miniHeader';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {

//     const  handleTakePhoto = (dataUri) => {
//         // Do stuff with the photo...
//         console.log('takePhoto');
//       }
    
//   return [
//         <div>    
//             <Header></Header>
//             <MiniH text="introduzca el numero de la maquina"></MiniH>
//             <div style={{display:"inline"}}>
//             <input type="number"></input>
//             <button>hola</button>
//             </div>
//             <MiniH text="tome una foto del numero de la maquina"></MiniH>
//             <Camera
//             isFullscreen={true}
//             onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
//             />
//             <button>hola</button>
//         </div>, 
//         'Create an ad group', 
//         'Create an ad'
//     ];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

// export default function Recaudaciones() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const steps = getSteps();

//   console.log("steps : ",steps)
//   console.log("skpped : ",skipped)
//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       console.log("news , ",newSkipped);
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };


//   return (

//     <div className={classes.root}>

      
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//                 Back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                   className={classes.button}
//                 >
//                   Skip
//                 </Button>
//               )}

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 className={classes.button}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Header from '../header/header'
// import MiniH from '../header/miniHeader';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
// import { propTypes } from 'react-bootstrap/esm/Image';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//         const  handleTakePhoto = (dataUri) => {
//         // Do stuff with the photo...
//         console.log('takePhoto');
//       }
//   return [  
  
//             <div style={{backgroundColor:"red"}}></div>,


//             <div style={{backgroundColor:"green"}}>a</div>, 
             

//             <div style={{backgroundColor:"yellow"}}>d</div>
//     ];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return console.log(Object.keys(stepIndex));
//     case 1:
//       return console.log(stepIndex[1].ToString());
//     case 2:
//       return console.log(stepIndex);
//     default:
//       return 'Unknown stepIndex';
//   }
// }

// export default function Recaudaciones() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>All steps completed</Typography>
//             <Button onClick={handleReset}>Reset</Button>
//           </div>
//         ) : (
//           <div>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className={classes.backButton}
//               >
//                 Back
//               </Button>
//               <Button variant="contained" color="primary" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
