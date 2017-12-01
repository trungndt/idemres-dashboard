
$ ->
	class General
		@init: ->
			$('.nice-select').niceSelect()
			do this.setupDatePicker
			do this.setupTimePicker
			return
		@setupDatePicker: ->
			$('.date-picker').datepicker()
			return
		@setupTimePicker: ->
			$('.time-picker').timepicker
				'scrollDefault': 'now'
				'timeFormat': 'h:i A'
			return

	class CreateNewBlock
		@init: ->
			# [EvENT] 
			$(document).on 'change', '#cbbEventType', ->
				$txtOther = $('#txtOtherEvent')
				if this.value == 'Other'
					$txtOther.show()
				else
					$txtOther.hide()
				return

			# [EvENT] 
			$(document).on 'change', '[data-action="disable-accordion"]', (e) ->
				$panel = $(this).closest('.panel')
				if $(this).prop('checked')
					$panel.addClass('disabled')
					$panel.find('.panel-collapse').collapse('hide')
				else
					$panel.removeClass('disabled')
				return

			# [EvENT] Disable accordion when class "disabled" is added
			$(document).on 'show.bs.collapse', '.disabled .panel-collapse', (e) ->
				preventDefault(e)
				return
			return
	do General.init
	do CreateNewBlock.init
	return