import React from "react";
import { useState } from "react/cjs/react.development";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../../api";

const DeletePost = (props) => {
  const { postDetail, push } = props;
  const [showDeletePostModal, setShowDeletePostModal] = useState(false);

  const handleOpenDeletePostModal = () => setShowDeletePostModal(true);

  const handleCloseDeletePostModal = () => setShowDeletePostModal(false);

  const handleDeletePost = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        handleCloseDeletePostModal();
        push("/");
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <Button negative onClick={handleOpenDeletePostModal}>
        Delete
      </Button>

      <Modal
        size="mini"
        open={showDeletePostModal}
        onClose={handleCloseDeletePostModal}
      >
        <Modal.Header>Delete The Post ?</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete the post ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={handleCloseDeletePostModal}>
            No
          </Button>
          <Button positive onClick={() => handleDeletePost(postDetail.id)}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeletePost;
