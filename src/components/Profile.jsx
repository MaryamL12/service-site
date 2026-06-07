import profilePic from '../assets/images/profile-picture.jpg'

function Profile() {
    return (
        <section className="profile-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-center">

                    {/* Left side */}
                    <div className="col-lg-6">
                        <h1 className="profile-title mb-0">
                            Hello I'm
                        </h1>
                        <h1 className="profile-title-name mt-2 mb-3">
                            Maryam
                            <br />
                            Lim-Baig.
                        </h1>
                        <h2 className="profile-subtitle">
                            Software engineering student.
                        </h2>
                    </div>

                    {/* Right side */}
                    <div className="col-lg-4 text-center">
                        <img
                            src={profilePic}
                            alt="Profile Picture"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile