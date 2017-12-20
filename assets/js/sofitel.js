(function() {
  $(function() {
    var AllEvents, CreateNewBlock, General, _DATA_ALL_EVENTS, _DATA_ALL_RES;
    _DATA_ALL_EVENTS = [
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
      }, {
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
      }, {
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
      }, {
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
      }
    ];
    _DATA_ALL_RES = [
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
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
        'is_active': false,
        'url': '#'
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
        'is_active': false,
        'url': 'http://google.com'
      }
    ];
    General = (function() {
      function General() {}

      General.init = function() {
        $('.nice-select').niceSelect();
        $('.image-dd').msDropDown();
        this.setupDatePicker();
        this.setupTimePicker();
        this.setupSidebarToggle();
        this.setupSwitcher();
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

      General.setupSwitcher = function() {
        return $(document).on('click', '.switcher input[type="radio"]', function() {
          $(this).closest('.switcher').find('.active').removeClass('active');
          $(this).closest('.switcher-option').addClass('active');
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
        $('#tblAllEvents').DataTable({
          data: _DATA_ALL_EVENTS,
          dom: '<"top" <"row form-horizontal" <"col-sm-2 col-status"> <"col-sm-3"f> <"col-sm-7 text-right"l> > > rt <"bottom"p><"clear">',
          language: {
            lengthMenu: 'Display _MENU_ per page',
            search: '',
            searchPlaceholder: 'Search event reference/name...',
            paginate: {
              previous: '<',
              next: '>'
            }
          },
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
              data: 'url'
            }, {
              data: 'status'
            }
          ],
          columnDefs: [
            {
              targets: 2,
              render: function(data, type, row) {
                return '<span class="text-info">' + data + '</span>';
              }
            }, {
              targets: 3,
              render: function(data, type, row) {
                var cls, content, mapper;
                mapper = {
                  'planning': 'tag-warning',
                  'live': 'tag-success',
                  'pending': 'tag-default'
                };
                cls = 'tag ' + mapper[row.status.toLowerCase()];
                cls += ' status-' + row.status.toLowerCase();
                content = row.status + (row.status === 'Planning' ? ' ' + row.percent + '%' : '');
                return '<span class="text-info">' + data + '</span><br/><div class="' + cls + '">' + content + '</div>';
              }
            }, {
              targets: 4,
              render: function(data, type, row) {
                return data + '<br/><small>' + row.contracted_duration + '</small>';
              }
            }, {
              targets: 6,
              render: function(data, type, row) {
                return data + '<br/><small class="customer-email">' + row.customer_email + '</small>';
              }
            }, {
              targets: 8,
              render: function(data, type, row) {
                var cls, targetAttr;
                cls = 'icon icon-globe' + (data === '#' ? '-disabled' : '');
                targetAttr = data !== '#' ? 'target="_blank"' : '';
                return '<a href="' + data + '" class="' + cls + '" ' + targetAttr + '></a>';
              }
            }, {
              targets: 9,
              visible: false,
              searchable: true
            }
          ],
          initComplete: function(a, b, c) {
            var $me, $select, column;
            $me = $(this);
            column = this.api().column(9);
            $me.parent().removeClass('form-inline');
            $me.parent().find('.input-sm').removeClass('input-sm');
            $select = $('<select/>', {
              'class': 'drop-filter',
              'html': $('<option/>', {
                'value': '',
                'html': 'Filter by status'
              })
            });
            column.data().unique().sort().each(function(e, i) {
              return $select.append($('<option/>', {
                'value': e,
                'html': e
              }));
            });
            $select.on('change', function() {
              var val;
              val = $.fn.dataTable.util.escapeRegex($(this).val());
              return column.search(val != null ? val : '^' + val + {
                '$': ''
              }, true, false).draw();
            });
            $me.prev().find('.col-status').prepend($select);
            return false;
          }
        });
      };

      return AllEvents;

    })();
    General.init();
    CreateNewBlock.init();
    AllEvents.init();
  });

}).call(this);
