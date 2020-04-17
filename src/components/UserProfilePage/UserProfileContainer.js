import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserProfilePage from "./UserProfilePage";

import { getDataMiddleware } from "../../redux/middlewares";
import { handlePutDataSuccess } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    putDataSuccess: state.putDataSuccess,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getDataMiddleware,
        handlePutDataSuccess,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
