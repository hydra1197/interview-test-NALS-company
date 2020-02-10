import React from 'react';
import PropTypes from 'prop-types';

const TableUserList = ({ list, loading }) => {
  const showUserList = list => {
    if (list && Array.isArray(list) && list.length > 0) {
      return list.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{ index += 1 }</td>
            <td className='py-1'><img src={item.avatar} alt='avatar'/></td>
            <td>{ item.name }</td>
            <td>{ item.email }</td>
            <td>{ item.phone }</td>
          </tr>
        );
      });
    }

    return <tr><td colSpan={5}>There are no users</td></tr>;
  };

  return (
    <div className='col-lg-12 grid-margin stretch-card'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>User List</h4>

          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                { loading
                  ? <tr><td colSpan={5}>Waiting ...</td></tr>
                  : showUserList(list)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

TableUserList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TableUserList;