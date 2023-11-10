export function Home() {
  return (
    <>
      <div className="mission">
        <h3>Mission statement:</h3>
        <p>
          Here at our tutoring center we aim to aid young developers in their
          journey to improve their coding skills. All current tutors are top
          scoring graduates of the coding bootcamp at UNC. They learned a great
          deal about all the newest technologies being used in the industry.
          Each tutor has a few key skills selected so you know who is the best
          fit for you.
        </p>
        <p>
          Click <a href="/Tutors">here</a> to take a look at our current
          registered tutors.
        </p>
      </div>
      <div className="login/signup">
        <p>
          Would you like to become a client and request tutor help? Click{" "}
          <a href="">here</a> to register as a client!
        </p>

        <p>
          Would you like to join our team and become our newest tutor? Click{" "}
          <a href="">here</a> to join our ranks!
        </p>

        <p>
          Already a member? Click <a href="">here</a> to login!
        </p>
      </div>
    </>
  );
}
