var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Clouds Rest", 
		image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, hic quos nobis maiores delectus ipsam, voluptatem, vel quae minus modi dolorum libero veritatis quibusdam aliquam quam ut repellat asperiores repudiandae nostrum placeat nihil. Impedit cupiditate alias accusamus architecto, ut maxime enim veniam molestias suscipit, perspiciatis quam mollitia quisquam sed praesentium nam. Dignissimos, velit. Repellat, quo dolorum officiis quam asperiores quia."
	},
	{
		name: "Desert Mesa", 
		image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, hic quos nobis maiores delectus ipsam, voluptatem, vel quae minus modi dolorum libero veritatis quibusdam aliquam quam ut repellat asperiores repudiandae nostrum placeat nihil. Impedit cupiditate alias accusamus architecto, ut maxime enim veniam molestias suscipit, perspiciatis quam mollitia quisquam sed praesentium nam. Dignissimos, velit. Repellat, quo dolorum officiis quam asperiores quia."
	},
	{
		name: "Canyon Floor", 
		image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, hic quos nobis maiores delectus ipsam, voluptatem, vel quae minus modi dolorum libero veritatis quibusdam aliquam quam ut repellat asperiores repudiandae nostrum placeat nihil. Impedit cupiditate alias accusamus architecto, ut maxime enim veniam molestias suscipit, perspiciatis quam mollitia quisquam sed praesentium nam. Dignissimos, velit. Repellat, quo dolorum officiis quam asperiores quia."
	}
];

function seedDB(){
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed Campgrounds!");
		Comment.remove({}, function(err){
			if(err){
				console.log(err);
			}
			console.log("Removed comments");
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err)
					} else {
						console.log("Added a campground");

						Comment.create(
							{
								text: "This place is great.",
								author: "Homer"
							}, function(err, comment){
								if(err){
									console.log(err);
								} else {
									campground.comments.push(comment);
									campground.save();
									console.log("Created new comment");
								}
								
							});
					}
				})
			});
		});
		
	});


}

module.exports = seedDB;


