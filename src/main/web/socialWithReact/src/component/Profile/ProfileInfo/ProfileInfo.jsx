import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={style.mainPhoto}
                     src='https://www.amateurphotographer.co.uk/wp-content/uploads/2017/11/Bliss_Copyright_preview-e1511540750271.jpeg'/>
            </div>
            <div>
                <img className={style.profilePhoto} src={props.profilePhoto}/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;