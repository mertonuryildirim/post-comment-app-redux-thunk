import React from "react";
import { useState } from "react/cjs/react.development";
import { Button, Modal } from "semantic-ui-react";

const DeletePost = () => {
  const [showDeletePostModal, setShowDeletePostModal] = useState(false);

  const handleOpenDeletePostModal = () => setShowDeletePostModal(true);

  const handleCloseDeletePostModal = () => setShowDeletePostModal(false);

  return (
    <>
      <Button negative onClick={handleOpenDeletePostModal}>Delete</Button>

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
          <Button positive onClick={() => {}}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeletePost;
