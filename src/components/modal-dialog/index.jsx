import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Button from '../../blocks/button';
import { GrClose } from 'react-icons/Gr';

const ModalDialog = ({ handleCloseModal }) => {
	const dialogRef = useRef(null);

	const onClickOutSide = (e) => {
		if (!dialogRef.current.contains(e.target)) {
			handleCloseModal();
		}
	};

	const onKeyUp = useCallback((e) => {
        if (e.keyCode === 27) {
            handleCloseModal();
        }
	}, [handleCloseModal]);

    useEffect(()=>{
        dialogRef.current.focus();
    },[]);

	return (
		<div
			onClick={onClickOutSide}
			onKeyDown={onKeyUp}
            tabIndex="0"
			className="w-full bg-gray-500 bg-opacity-50 z-20 h-screen absolute flex items-center  justify-center top-0 bottom-0 right-0 left-0"
		>
			<div
                tabIndex="0"
				ref={dialogRef}
				className="flex bg-white min-w-[500px] min-h-[300px] p-3 h-fit flex-col rounded-lg border-2 relative"
			>
                <div tabIndex="0" onClick={handleCloseModal} className='absolute top-0 right-0 mr-2 mt-2 p-2 rounded-full text-lime-500 hover:bg-gray-400'><GrClose color='blue'/></div>
				<div className="h-8">"Title"</div>
				<div className="my-4 flex-1">"Content here added from caller"</div>
				<div className="p-2 border-t-gray-500">
					<Button class="mx-2" onClick={handleCloseModal}>
						Save
					</Button>
					<Button class="mx-2" onClick={handleCloseModal}>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ModalDialog;
