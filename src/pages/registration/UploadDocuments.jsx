import { Icon } from "@iconify/react";
import { Upload } from "lucide-react";

const documents = [
  {
    icon: <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "Trade License",
    card: [
      {
        title: "docker.png",
        icon: <Icon icon="charm:circle-tick" width="16" height="16" />,
        docSize: "4.87KB",
        desc: "File Succesfully added and ready for submission",
        removebtn: "remove",
        addbtn: "file Added",
      },
    ],
    replacebtn: "Replace file",
  },
  {
    icon : <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "CR Copy",
    UploadBtn: "Upload",
    des: "No file uploaded for this category yet",
  },
  {
    icon : <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "ID of Owner",
    UploadBtn: "Upload",
    des: "No file uploaded for this category yet",
  },
  {
    icon : <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "ID Documents of Representative",
    UploadBtn: "Upload",
    des: "No file uploaded for this category yet",
  },
  { 
    icon : <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "Authorized Letter/Authorized Signatory",
    UploadBtn: "Upload",
    des: "No file uploaded for this category yet",
  },
  {
    icon : <Icon icon="lets-icons:upload" width="24" height="24" />,
    title: "Additional Business Document",
    UploadBtn: "Upload",
    des: "No file uploaded for this category yet",
  },
];
const UploadDocuments = () => {
  return (
    <section className="py-6">
      <div className="py-4">
        <h2 className="font-poppins md:text-2xl font-semibold text-xl">
          Document Upload and Status Tracking
        </h2>
        <p className="text-accent font-open-sans md:text-[16px] mb-6 mt-2 text-sm">
          Submit required proofs. One file per category is required. Supported:
          PDF,JPG,PNG,DOCX. Max 10MB per file.
        </p>
      </div>
      <div>
        {documents.map((doc) => (
          <div className="border border-gray-400 md:px-4 px-3  py-6 rounded-lg my-4">
            <div className="sm:flex justify-between block">
              <div className="flex gap-2 items-center font-poppins text-sm font-medium">
                <span>{doc.icon}</span>
                <h4>{doc.title}</h4>
              </div>
              {doc.replacebtn ? (
                <button className="bg-accent text-sm cursor-pointer text-white px-4 py-2 md:my-0 mt-2 mb-4 rounded-lg font-open-sans">
                  {doc.replacebtn}
                </button>
              ) : (
                <button className="bg-accent md:my-0 mt-2 mb-4 cursor-pointer text-white text-sm px-4 py-2 rounded-lg font-open-sans">
                  {doc.UploadBtn}
                </button>
              )}
            </div>
            {doc.des && <p className="px-2 text-gray-500 italic">{doc.des}</p>}
            <div className="mt-4">
              {doc.card &&
                doc.card.map((item) => (
                  <div
                    key={item.title}
                    className="bg-green-100 py-2 px-4 rounded-lg md:flex items-center border border-green-200"
                  >
                    <div className="md:w-[90%] w-full">
                      <div className="flex gap-4  rounded-lg ">
                        <h4 className="md:text-lg font-open-sans font-medium text-sm">
                          {item.title}
                        </h4>
                        <button className="bg-green-200 text-green-600 sm:px-2 px-1 md:text-sm text-xs flex items-center gap-1">
                          {" "}
                          <span>
                            {
                              item.icon
                            }
                          </span>
                          {item.addbtn}
                        </button>
                      </div>
                      <div className="flex justify-between  md:my-2 my-4">
                        <p className="text-gray-400 text-open-sans">
                          {item.docSize}
                        </p>
                        <span className="text-green-600">{item.icon}</span>
                      </div>
                      <div className="flex md:gap-4 gap-2 items-center">
                        <span className="text-green-600">{item.icon}</span>
                        <p className="text-green-600  md:text-[16px] text-sm font-open-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div>
                      <a
                        href=""
                        className="text-red-600 px-4 md:my-0 capitalize my-2 inline-block"
                      >
                        {item.removebtn}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default UploadDocuments;
