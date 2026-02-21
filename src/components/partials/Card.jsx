import { Icon } from "@iconify/react";

const Card = ({
  title,
  step1,
  step2,
  step3,
  step4,
  des1,
  des2,
  des3,
  des4,
  id1,
  id2,
  id3,
  id4,
  doc1,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  caption1,
  caption2,
  caption3,
  caption4,
  caption5,
  caption6,
  subCaption1,
  subCaption2,
  subCaption3,
  subCaption4,
  subCaption5,
  subCaption6,
}) => {
  const card3 = [
    {
      caption: caption1,
      subCaption: subCaption1,
    },
    {
      caption: caption2,
      subCaption: subCaption2,
    },
    { caption: caption3, subCaption: subCaption3 },
    { caption: caption4, subCaption: subCaption4 },
    { caption: caption5, subCaption: subCaption5 },
    { caption: caption6, subCaption: subCaption6 },
  ];
  const steps = [
    {
      step: step1,
      des: des1,
      id: id1,
    },
    {
      step: step2,
      des: des2,
      id: id2,
    },
    {
      step: step3,
      des: des3,
      id: id3,
    },
    {
      step: step4,
      des: des4,
      id: id4,
    },
  ];
  const card2 = [
    {
      doc: doc1,
    },
    {
      doc: doc2,
    },
    {
      doc: doc3,
    },
    {
      doc: doc4,
    },
    {
      doc: doc5,
    },
    {
      doc: doc6,
    },
  ];
  return (
    <>
      <div className="bg-white md:p-6 p-4  w-full rounded-xl my-4 border-2 border-accent">
        <h4 className=" font-bold md:text-xl text-md font-poppins">{title}</h4>
        <div className="mt-6">
          {steps.some((item) => item.step && item.des && item.id) && (
            <div className="flex flex-col gap-4">
              {steps.map(
                (item, index) =>
                  item.step &&
                  item.des &&
                  item.id && (
                    <div
                      key={index}
                      className="flex justify-between items-center gap-1"
                    >
                      <div className="  text-white  ">
                        <span className="w-10 h-10 bg-accent rounded-full  flex justify-center items-center">
                         {item.id}  
                          </span>
                      </div>
                      <div className=" ms-4">
                        <p className="font-semibold mt-2 text-lg font-poppins">
                          {item.step}
                        </p>
                        <p className="text-gray-600  text-sm font-open-sans">
                          {item.des}
                        </p>
                      </div>
                    </div>
                  ),
              )}
            </div>
          )}
        </div>
        <div className="mt-6">
          {card2.map(
            (data) =>
              data.doc && (
                <div
                  className="bg-background rounded-lg font-open-sans my-4 flex items-center gap-3 p-4 "
                  key={data.doc}
                >
                  <span className="text-accent">
                    <Icon icon="charm:circle-tick" width="20" height="20" />
                  </span>
                  {data.doc}
                </div>
              ),
          )}
        </div>
        <div className="mt-6">
            {
             card3.map((cardData)=>(
                cardData.caption && cardData.subCaption &&(
                    <div className="my-4">
                        <h5 className="font-poppins font-semibold">{cardData.caption}</h5>
                        <p className="text-gray-600">{cardData.subCaption}</p>
                    </div>
                )
             ))
            }
        </div>
      </div>
    </>
  );
};
export default Card;
