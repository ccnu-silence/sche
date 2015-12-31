Template.places.events({
	'click .places .addPlace': function( event ){
		event.preventDefault();
		var self = $(event.target);
		var form = $(self).parents('form');

		var name = form.find('input[name="place"]').val();
		if( !name ){
			alert( 'Place name cannot be null' );
			return false;
		}
		var place = {
			_id: uuid(),
			placeName: name,
			coord_x: 0,
			coord_y: 0
		};

		Events.update( this._id, {
			$push:{
				places: place
			}
		});
	},
	'click .removePlace': function( event, template ){
		event.preventDefault();
		var self = $(event.target);
		var place_id = self.parents('li').attr('data-id');

		var a = Events.update( {
			_id: template.data._id
			},{
			$pull:{
				places:{
					_id: place_id
				}
			}
		});
	}
})
