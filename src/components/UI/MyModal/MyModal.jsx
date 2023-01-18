import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal];

    if(visible) {
        rootClasses.push(cl.active);
    }


    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalWrapper}>
                <div className={cl.myModalContent}>
                    <button className={cl.closeBtn} onClick={() => setVisible(false)}>Close</button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;