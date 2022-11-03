import React, { useState } from 'react';
// import QuestionList from '../../components/QuestionList/QuestionList';
// import ProgressBar from '../../components/ProgressBar/ProgressBar';


function QuestionBox(props){ 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showType, setShowType] = useState(false);
  const [neSi, setNeSi] = useState(0);
  const [niSe, setNiSe] = useState(0);
  // const [sj, setSj] = useState(0);
  // const [sp, setSp] = useState(0);
  // const [nt, setNt] = useState(0);
  // const [nf, setNf] = useState(0);
  // const [initiating, setInitiating] = useState(0);
  // const [response, setResponse] = useState(0);

  
 // let NeSiTeFi = {entj,, enfp, estj, esfp, istj, isfp, intj, infp  }
  // let TiFeNiSe = { esfj:0, enfj:0, isfj:0, infj:0, estp:0, entp:0, istp:0, intp:0}
 // const sj = [estj, esfj, istj, isfj];
 // const sp = [esfp, enfp, isfp, istp];
 // const nt = [entp, entj, intp, entj];
 // const nf = [enfp, enfj, infp, infj];

  function handleButton(value){
    const nextQues = currentQuestion+1;
    setCurrentQuestion(nextQues);

    if (nextQues < questions.length) {
      setCurrentQuestion(nextQues);
    } else {
        setShowType(true);
    }

    if (value===1) {
     setNeSi(neSi+1)
    };

    if (value===2) {
      setNiSe(niSe+1);
    };
  }
    
    
  const obj = {
    num: 1
  };
  obj.num= obj.num +1;
  console.log(obj.num);


  const questions= [
      {
        questionText: `الوعي عندك اعلى`,
            answerOptions: [
                {answerText: 'رغبات الاخرين و الخيارات المتاحة لهم', value:1}, 
                {answerText: 'رغباتك و مستقبلك الشخصي', value:2}, 
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4},
              ],
      },
      {
        questionText: `تفصل أن`,
            answerOptions: [
                {answerText: 'تعطي التجربة الحسية للاخرين', value:1},
                {answerText: 'تستقبل التجربة الحسية من الاخرين', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4},
              ],
      },
      {
        questionText: `اين من الخيارات يصفك اكثر`,
            answerOptions: [
                {answerText: '"احتاج الحرية وما في أي احتمال أني اضحي بيها فسبيل شي ثاني"', value:1},
                {answerText: '"رغم اني اقدر الحرية لكن استطيع التضحية بها من اجل الواجبات و المسؤليات التي علي"', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4},
              ],
      },
      {
        questionText: `هل تفضل ان`,
            answerOptions: [
                {answerText: 'أن تتحرر من الاتزامات', value:1},
                {answerText: 'أن تؤدي الاتزامات', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4},
              ],
       },
      {
        questionText: `مالذي يصفك اكثر`,
            answerOptions: [
                {answerText: 'تصنع الذكريات للاخرين', value:1},
                {answerText: 'تسترجع ذكرياتك و تسردها للغير', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4},
              ]
            },
      {
        questionText: `اين من العبارات يصفك اكثر`,
            answerOptions: [
                {answerText: 'الجرئة', value:1},
                {answerText: 'الصبر', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ]
            },
      {
        questionText: `تحكم و تتخذ قرارك بنائا على`,
            answerOptions: [
                {answerText: 'العقل من خلال المعرفة المجمعة من مصادر خارجية و الحس الأخلاقي الشخصي (قيمك)', value:1},
                {answerText: 'المنطق و المعايير الأخلاقية للمجتمع ككل (العرف)', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ]
            },
      {
        questionText: `ايمها يصفك اكثر`,
            answerOptions: [
                {answerText: 'لديك وعي عاطفي بنفسك و تسعى لتلك الاشياء الذي تجعلك سعيداً', value:1},
                {answerText: 'تسعى للاعتناء بالاخرين ولأم جراحهم', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ]
            },
      {
        questionText: `ما الذي يهمك اكثر`,
            answerOptions: [
                {answerText: 'الحقيقة المطلقة', value:1},
                {answerText: 'الخير المطلق', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ]
            },
      {
        questionText:`ايهما تفضل دائمآ`,
              answerOptions: [
                {answerText: 'بحث المعلومات الجاهزه من الآخرين واضافتها الى هيكلتك', value:1},
                {answerText: 'تحليل المعلومات لسبيل الاكتشاف مدى حقيقتها لغاية الإطلاع فقط', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ] 
            },
      {
        questionText:`هل انت تميل اكثر الى`,
              answerOptions: [
                {answerText: 'بحث على الموثوقية في الاخرين', value:1},
                {answerText: 'توفير الموثوقية للاخرين', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ] 
            },
      {
        questionText:`اين تجد وعيك اعلى`,
              answerOptions: [
                {answerText: 'وعيك في قيمتك الذاتية', value:1},
                {answerText: 'وعيك في قيمة الاخرين', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ] 
            },
      {
        questionText:`اين تجد رغبتك اعلى`,
              answerOptions: [
                {answerText: 'السمعة و المكانة الاجتماعية', value:1},
                {answerText: 'التقدير و الامتنان', value:2},
                // {answerText: 'Not sure', value:3},
                // {answerText: 'Unk', value:4}
              ] 
            },                        
  ];


return (
  <div className='app'>
    <div className=''>
      {showType ? (
        <div className='score-section black f3'>
        <span>You scored {neSi} {niSe} out of {questions.length}</span>
          <div className=''>
            {
              (neSi>6 && niSe<6) ? `You're type is ENFP.` : 
              (niSe>6 && niSe<6) ? `You're type is ISTP.`:
              neSi<6? `You're type is INTJ.` :
              niSe<6 ? `You're type is ESFJ.`: 'Undefined-1'
            }
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count black f5'>
              <h3><span>Question {currentQuestion +1}</span>/{questions.length}</h3>
            </div>
            <div className='question-text ma4 mt0 black f3'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>  
            {questions[currentQuestion].answerOptions.map((answerOption, index) => ( 
               <button 
                 key={index}
                 className='w-30 f4  no-underline br-pill ph3 pv3 mb3 dib black  link' 
                 //class='grow '
                 onClick={() => {
                    handleButton(answerOption.value);
                    props.progress();
                  }}>
                  {answerOption.answerText}
                </button>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
  );
}

export default QuestionBox;