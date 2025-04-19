import logo2DImage from '../../../assets/images/logo-2d.gif';

export const RouteLoading = () => {
  return (
    <div className="h-screen w-screen grid place-content-center ">
      {/* <PuffLoader color="#4379F2" /> */}
      <div className="w-80">
        <img src={logo2DImage} alt="2D logo" loading="lazy" />
      </div>
    </div>
  );
};
