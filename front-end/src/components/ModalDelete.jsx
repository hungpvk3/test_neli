import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({isOpen, onCancel, onOk, children}) => {
  return (
    <div className={`fixed top-0 lef-0 w-full h-full ${isOpen ? null : 'hidden'}`}>
        <div className="fixed top-0 lef-0 w-full h-full" onClick={onCancel}></div>
        <div className="relative z-50 mx-auto w-2/3 md:w-1/3 mt-52 h-max bg-white border shadow">
            <span className="absolute top-0 right-2 text-2xl cursor-pointer" onClick={onCancel}>&times;</span>
            <div className="h-full flex items-center justify-center">
                {children}
            </div>
            <div className="absolute bottom-2 right-4">
                <div className="flex gap-2">
                    <button className="bg-blue-500 py-1 px-5 rounded-lg text-white font-medium hover:bg-blue-600" onClick={onOk}>Confirm</button>  
                    <button className="bg-red-500 py-1 px-5 rounded-lg text-white font-medium hover:bg-red-600" onClick={onCancel}>Cancel</button>  
                </div>
            </div>
        </div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
}

export default Modal