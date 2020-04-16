import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserProfilePage from "./UserProfilePage";

import { getDataMiddleware } from "../../redux/middlewares";

const mapStateToProps = (state) => {
  return {
    putDataSuccess: state.putDataSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getDataMiddleware,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
