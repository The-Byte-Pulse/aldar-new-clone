import { Fragment } from "react";
const DashboardContent = ({ title = "", description = "", children }) => {
  return (
    <Fragment>
      <title>{title}</title>
      <meta name="description" content={description} />

      <div className="m-5">
        <div className="relative">{children}</div>
      </div>
    </Fragment>
  );
};

export default DashboardContent;
