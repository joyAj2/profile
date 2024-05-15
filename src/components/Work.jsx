import React from "react";
import { Link} from "react-scroll";

function Work() {
  return (
    <div className="work-background">
      <div class="my-5 my-custom-background">
        <div class="p-5 text-center ">
          <div class="container py-5">
            <h1 class="text-body-emphasis">Work In Progress!</h1>
            <p className="lead fw-bold" style={{ color: "blue" }}>
              <i class="bi bi-hammer"></i> Get a sneak peek at what I'm
              building.{"  "}
              <i class="bi bi-activity"></i>
            </p>
            <p class="col-lg-8 mx-auto lead">
              Welcome to my work page! Here you can find updates on the projects
              I'm currently working on. Stay tuned for more exciting
              developments!
            </p>
          </div>
        </div>
      </div>
      {/* Add space */}
      <div style={{ marginBottom: "6.5rem" }}></div>
      <div className="container marketing">
        {/* Three columns of text below the carousel */}
        <div className="row text-center">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal text-white">Heading</h2>{" "}
            {/* Added text-white class */}
            <p className="text-white">
              {" "}
              {/* Added text-white class */}
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <button className="btn custom-blue-btn">View details »</button>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal text-white">Heading</h2>{" "}
            {/* Added text-white class */}
            <p className="text-white">
              {" "}
              {/* Added text-white class */}
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <button className="btn custom-blue-btn ">View details »</button>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal text-white">Heading</h2>{" "}
            {/* Added text-white class */}
            <p className="text-white">
              {" "}
              {/* Added text-white class */}
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <button className="btn custom-blue-btn">View details »</button>
          </div>
        </div>
        {/* Add space */}
        <div style={{ marginBottom: "6.5rem" }}></div>
        {/* START THE FEATURETTES */}

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2
              className="featurette-heading fw-normal lh-1"
              style={{ color: "rgb(255, 177, 177)" }}
            >
              First featurette heading.{" "}
              <span style={{ color: "rgb(255, 203, 203)" }}>
                It’ll blow your mind.
              </span>
            </h2>
            <p className="lead text-white">
              {" "}
              {/* Added text-white class */}
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />
        {/* Add space */}
        <div style={{ marginBottom: "3rem" }}></div>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2
              className="featurette-heading fw-normal lh-1"
              style={{ color: "rgb(255, 177, 177)" }}
            >
              Oh yeah, it’s that good.{" "}
              <span style={{ color: "rgb(255, 203, 203)" }}>
                See for yourself.
              </span>
            </h2>
            <p className="lead text-white">
              {" "}
              {/* Added text-white class */}
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}></div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2
              className="featurette-heading fw-normal lh-1"
              style={{ color: "rgb(255, 177, 177)" }}
            >
              And lastly, this one.{" "}
              <span style={{ color: "rgb(255, 203, 203)" }}>Checkmate.</span>
            </h2>
            <p className="lead text-white">
              {" "}
              {/* Added text-white class */}
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
            <Link
              to="portfolio"
              smooth={true}
              duration={1}
              className="go-to-work-link"
            >
              Go to Portfolio...
            </Link>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />
        {/* /END THE FEATURETTES */}
      </div>

      <div style={{ marginBottom: "3rem" }}></div>
      {/* <div className="grid-container">
        <div>
          <div className="grid-item item1">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
        <div className="grid-item item2">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item3">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item4">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item5">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item6">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item7">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item8">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="grid-item item9">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
      </div> */}
    </div>
  );
}
export default Work;
