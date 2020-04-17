let moment = require('moment')

function DatePickerComponent () {
    this.datePickerCss = 'table.md-calendar'
    this.allDayButtonsCss = this.datePickerCss + ' td.md-calendar-date'
    this.selectedDayButtonCss = this.allDayButtonsCss + '.md-calendar-selected-date'
    this.todayDayButtonCss = this.allDayButtonsCss + '.md-calendar-date-today'
    this.enabledDayButtonsCss = this.allDayButtonsCss + ':not(.md-calendar-date-disabled)[aria-label]'
    this.disabledDayButtonsCss = this.allDayButtonsCss + '.md-calendar-date-disabled[aria-label]'
    this.footerCss = '[class*="picker"]'
    this.todayButtonCss = this.footerCss + ' button.md-primary'
    this.cancelButtonCss = this.footerCss + ' button:not(.md-primary)'
    this.todaysDayCss = '.md-calendar-date-today.md-focus span'

    this.isCalendarDisplayed = function () {
        return $(this.datePickerCss).isVisible()
    }

    this.getTodaysDay = function () {
        if (browser.isVisible(this.todayDayButtonCss)) {
            browser.getText(this.todayDayButtonCss)
        }
    }

    this.selectedDayButton = function () {
        return $(this.selectedDayButtonCss)
    }

    this.todayButton = function () {
        let buttons = $$(this.todayButtonCss).filter(function (button) {
            return button.isVisible()
        })
        return buttons[0]
    }

    this.cancelButton = function () {
        let buttons = $$(this.cancelButtonCss).filter(function (button) {
            return button.isVisible()
        })
        return buttons[0]
    }

    this.enabledDayButtons = function () {
        return $$(this.enabledDayButtonsCss)
    }

    this.disabledDayButtons = function () {
        return $$(this.disabledDayButtonsCss)
    }

    this.getDisabledDates = function () {
        return this.disabledDayButtons().map(function (el) {
            return el.getText()
        })
    }

    this.getEnabledDates = function () {
        return this.enabledDayButtons().map(function (el) {
            return el.getText()
        })
    }

    this.getEnabledDateTimestamps = function () {
        let dates = this.enabledDayButtons()
        return dates.map(function (el) {
            return el.getAttribute('data-timestamp')
        })
    }

    this.getDisabledDateTimestamps = function () {
        return this.disabledDayButtons().map(function (el) {
            return el.getAttribute('data-timestamp')
        })
    }

    this.clickDayButton = function (date) {
        if (this.isCalendarDisplayed()) {
            let button = $(this.allDayButtonsCss + `[aria-label*="${date}"]`)
            button.scroll()
            button.click()
            browser.pause(1000)
        }
    }

    this.isDayButtonEnabled = function (date) {
        if (this.isCalendarDisplayed()) {
            let button = $(this.allDayButtonsCss + `[aria-label*="${date}"]`)
            return button.isEnabled()
        }
    }

    this.clickTodayButton = function () {
        if (this.isCalendarDisplayed()) {
            this.todayButton().click()
            browser.pause(1000)
        }
    }

    this.clickCancelButton = function () {
        if (this.isCalendarDisplayed()) {
            this.cancelButton().click()
            browser.pause(1000)
        }
    }

    this.dateFormat = 'MMMM D YYYY'

    this.setDateToLastMonth = function () {
        let date = moment().subtract(1, 'months').format(this.dateFormat)
        this.clickDayButton(date)
    }

    this.setDateToNextMonth = function () {
        let date = moment().add(1, 'months').format(this.dateFormat)
        this.clickDayButton(date)
    }

    this.isTodayButtonEnabled = function () {
        return this.todayButton().isEnabled()
    }
}

module.exports = new DatePickerComponent()
