import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormComponent from "./FormComponent";
import { putDataMiddleware } from "../../../redux/middlewares";

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    children: state.children,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        putDataMiddleware,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
