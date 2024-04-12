import React, { cloneElement } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useKeyPress } from "../hooks/useKeyPress";

const StyledWindow = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 0.3px black solid;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    transition: all 0.5s;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 999;
    transition: all 0.5s;
`;

const ModalContext = React.createContext();

const useModalContext = () => {
    const context = React.useContext(ModalContext);

    if (!context)
        console.log("Something went wrong while accessing Modal Context");

    return context;
};

function Modal({ children }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleCloseModal = () => {
        setIsModalOpen("");
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const values = {
        isModalOpen,
        handleOpenModal,
        handleCloseModal,
    };

    return (
        <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
    );
}

function Window({ children }) {
    const { isModalOpen, handleCloseModal } = useModalContext();
    useKeyPress("Escape", handleCloseModal);
    const ref = useOnClickOutside(handleCloseModal);

    if (!isModalOpen) return null;

    return createPortal(
        <Overlay>
            <StyledWindow ref={ref}>
                {cloneElement(children, {
                    onCloseModal: handleCloseModal, //so children element can integrate this inside the modal
                })}
            </StyledWindow>
        </Overlay>,
        document.body
    );
}

function Open({ children }) {
    const { handleOpenModal } = useModalContext();
    //we have to embedd handleOpenModal into the onClick prop ( mostly button element will be used also any html element can take this)
    //clone Element (element, props,  node);
    return React.cloneElement(children, {
        onClick: () => {
            handleOpenModal();
        },
    });
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
