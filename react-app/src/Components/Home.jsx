// Filename - App.js

import React from "react";


function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
   "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
						/>
					</div>
					<li>
						<a href="#courses">Courses</a>
					</li>
					<li>
						<a href="#tutorials">Tutorials</a>
					</li>
					<li>
						<a href="#jobs">Jobs</a>
					</li>
					<li>
						<a href="#student">Student</a>
					</li>
				</ul>

				<div class="rightNav">
					<input
						type="text"
						name="search"
						id="search"
					/>
					<button class="btn btn-sm">
						Search
					</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							7 Best Tips To Speed Up Your Job
							Search in 2022
						</h1>
						
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							JavaScript Tutorial
						</h1>
						
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Java Programming Language
						</h1>
						
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							What is Machine Learning?
						</h1>
						
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	);
}

export default App;
