(function() {
  $(function() {
    var CreateNewBlock, General;
    General = (function() {
      function General() {}

      General.init = function() {
        $('.nice-select').niceSelect();
        $('.image-dd').msDropDown();
        this.setupDatePicker();
        this.setupTimePicker();
      };

      General.setupDatePicker = function() {
        $('.date-picker').datepicker({
          'dateFormat': 'dd M yy'
        });
      };

      General.setupTimePicker = function() {
        $('.time-picker').timepicker({
          'scrollDefault': 'now',
          'timeFormat': 'h:i A'
        });
      };

      return General;

    })();
    CreateNewBlock = (function() {
      function CreateNewBlock() {}

      CreateNewBlock.init = function() {
        $(document).on('change', '#cbbEventType', function() {
          var $txtOther;
          $txtOther = $('#txtOtherEvent');
          if (this.value === 'Other') {
            $txtOther.show();
          } else {
            $txtOther.hide();
          }
        });
        $(document).on('change', '[data-action="disable-accordion"]', function(e) {
          var $panel;
          $panel = $(this).closest('.panel');
          if ($(this).prop('checked')) {
            $panel.addClass('disabled');
            $panel.find('.panel-collapse').collapse('hide');
          } else {
            $panel.removeClass('disabled');
          }
        });
        $(document).on('show.bs.collapse', '.disabled .panel-collapse', function(e) {
          preventDefault(e);
        });
        $(document).on('click', '[data-action="complete-step"]', function(e) {});
      };

      return CreateNewBlock;

    })();
    General.init();
    CreateNewBlock.init();
  });

}).call(this);
