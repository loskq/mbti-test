import React, { useState } from "react";

import Result from "../Result/Result";
import ProgressBar from "../ProgressBar/ProgressBar";

function QuestionBox(props) {
  const [percentage, setPercentage] = useState(0);

  function handleProgress() {
    setPercentage(percentage + 25);
  }

  const obj = {
    num: 1,
  };
  obj.num = obj.num + 1;
  console.log(obj.num);

  const questions = [
    {
      questionText: `الوعي عندك اعلى`,
      answerOptions: [
        { answerText: "رغبات الاخرين و الخيارات المتاحة لهم", value: 1 },
        { answerText: "رغباتك و مستقبلك الشخصي", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4},
      ],
    },
    {
      questionText: `تفصل أن`,
      answerOptions: [
        { answerText: "تعطي التجربة الحسية للاخرين", value: 1 },
        { answerText: "تستقبل التجربة الحسية من الاخرين", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4},
      ],
    },
    {
      questionText: `اين من الخيارات يصفك اكثر`,
      answerOptions: [
        {
          answerText:
            '"احتاج الحرية وما في أي احتمال أني اضحي بيها فسبيل شي ثاني"',
          value: 1,
        },
        {
          answerText:
            '"رغم اني اقدر الحرية لكن استطيع التضحية بها من اجل الواجبات و المسؤليات التي علي"',
          value: 2,
        },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4},
      ],
    },
    {
      questionText: `هل تفضل ان`,
      answerOptions: [
        { answerText: "أن تتحرر من الاتزامات", value: 1 },
        { answerText: "أن تؤدي الاتزامات", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4},
      ],
    },
    {
      questionText: `مالذي يصفك اكثر`,
      answerOptions: [
        { answerText: "تصنع الذكريات للاخرين", value: 1 },
        { answerText: "تسترجع ذكرياتك و تسردها للغير", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4},
      ],
    },
    {
      questionText: `اين من العبارات يصفك اكثر`,
      answerOptions: [
        { answerText: "الجرئة", value: 1 },
        { answerText: "الصبر", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `تحكم و تتخذ قرارك بنائا على`,
      answerOptions: [
        {
          answerText:
            "العقل من خلال المعرفة المجمعة من مصادر خارجية و الحس الأخلاقي الشخصي (قيمك)",
          value: 1,
        },
        {
          answerText: "المنطق و المعايير الأخلاقية للمجتمع ككل (العرف)",
          value: 2,
        },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `ايمها يصفك اكثر`,
      answerOptions: [
        {
          answerText:
            "لديك وعي عاطفي بنفسك و تسعى لتلك الاشياء الذي تجعلك سعيداً",
          value: 1,
        },
        { answerText: "تسعى للاعتناء بالاخرين ولأم جراحهم", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `ما الذي يهمك اكثر`,
      answerOptions: [
        { answerText: "الحقيقة المطلقة", value: 1 },
        { answerText: "الخير المطلق", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `ايهما تفضل دائمآ`,
      answerOptions: [
        {
          answerText: "بحث المعلومات الجاهزه من الآخرين واضافتها الى هيكلتك",
          value: 1,
        },
        {
          answerText:
            "تحليل المعلومات لسبيل الاكتشاف مدى حقيقتها لغاية الإطلاع فقط",
          value: 2,
        },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `هل انت تميل اكثر الى`,
      answerOptions: [
        { answerText: "بحث على الموثوقية في الاخرين", value: 1 },
        { answerText: "توفير الموثوقية للاخرين", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `اين تجد وعيك اعلى`,
      answerOptions: [
        { answerText: "وعيك في قيمتك الذاتية", value: 1 },
        { answerText: "وعيك في قيمة الاخرين", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
    {
      questionText: `اين تجد رغبتك اعلى`,
      answerOptions: [
        { answerText: "السمعة و المكانة الاجتماعية", value: 1 },
        { answerText: "التقدير و الامتنان", value: 2 },
        // {answerText: 'Not sure', value:3},
        // {answerText: 'Unk', value:4}
      ],
    },
  ];

  return (
    <div className="app">
      <Result questions={questions} progress={handleProgress} />
      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default QuestionBox;
