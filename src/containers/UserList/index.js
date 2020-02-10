import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TableUserList } from '../../components';
import { getUserList } from '../../redux/User/actions';

const UserList = ({ getUserList, userList, loading }) => {
  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return <TableUserList list={userList} loading={loading} />;
};

UserList.propTypes = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array.isRequired,
  getUserList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userList: state.user.list,
  loading: state.user.isFetching,
});

const actionCreators = {
  getUserList,
};

export default connect(
  mapStateToProps,
  actionCreators
)(UserList);