(function() {
  $(function() {
    var AllEvents, CreateNewBlock, General;
    General = (function() {
      function General() {}

      General.init = function() {
        $('.nice-select').niceSelect();
        $('.image-dd').msDropDown();
        this.setupDatePicker();
        this.setupTimePicker();
        this.setupSidebarToggle();
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

      General.setupSidebarToggle = function() {
        $(document).on('click', '#sidebar .sub-menu a', function() {
          $(this).parent().toggleClass('toggled');
          return $(this).next().slideToggle(100);
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
    AllEvents = (function() {
      function AllEvents() {}

      AllEvents.init = function() {
        this.setupDataTables();
      };

      AllEvents.setupDataTables = function() {
        var DATA;
        DATA = [
          {
            'date_added': '30 Jul 2017, 12:18',
            'account_holder': 'KHAYA',
            'event_ref': '02131',
            'event_name': 'Fast Annual Dinner',
            'status': 'Planning',
            'percent': 60,
            'contracted_start': '01 Jan 2018',
            'contracted_duration': '2 days',
            'company': 'Lorem Ipsum',
            'customer_name': 'Sylvia Stay',
            'customer_email': 'sylvia@gmail.com',
            'reg': '24/65',
            'is_active': false
          }, {
            'date_added': '30 Jul 2017, 12:18',
            'account_holder': 'JILEE',
            'event_ref': '034534',
            'event_name': 'Singapore Food Festival',
            'status': 'Planning',
            'percent': 40,
            'contracted_start': '01 Jan 2018',
            'contracted_duration': '2 days',
            'company': 'Lorem Ipsum',
            'customer_name': 'Sylvia Stay',
            'customer_email': 'sylvia@gmail.com',
            'reg': '12/43',
            'is_active': false
          }, {
            'date_added': '30 Jul 2017, 12:18',
            'account_holder': 'JOMA',
            'event_ref': '13130',
            'event_name': 'Sunway Conf',
            'status': 'Pending',
            'contracted_start': '01 Jan 2018',
            'contracted_duration': '2 days',
            'company': 'Lorem Ipsum',
            'customer_name': 'Sylvia Stay',
            'customer_email': 'sylvia@gmail.com',
            'reg': '3/42',
            'is_active': false
          }, {
            'date_added': '30 Jul 2017, 12:18',
            'account_holder': 'DINSMITH',
            'event_ref': '42150',
            'event_name': 'Time Management Event',
            'status': 'Live',
            'contracted_start': '01 Jan 2018',
            'contracted_duration': '2 days',
            'company': 'Lorem Ipsum',
            'customer_name': 'Sylvia Stay',
            'customer_email': 'sylvia@gmail.com',
            'reg': '3/21',
            'is_active': false
          }
        ];
        $('#tblAllEvents').DataTable({
          data: DATA,
          columns: [
            {
              data: 'date_added'
            }, {
              data: 'account_holder'
            }, {
              data: 'event_ref'
            }, {
              data: 'event_name'
            }, {
              data: 'contracted_start'
            }, {
              data: 'company'
            }, {
              data: 'customer_name'
            }, {
              data: 'reg'
            }, {
              data: 'is_active'
            }
          ]
        });
      };

      return AllEvents;

    })();
    General.init();
    CreateNewBlock.init();
    AllEvents.init();
  });

}).call(this);
