// Joystick module matching the thumbsticks in the PS5, for use with Ali Express PS5 hall effect sticks. Sensor connections are polarized, so use PS5 sticks only. Datasheet used for layout: C&K THB001P
module.exports = {
    params: {
      designator: 'J', // the only semi-required param, for naming components on the PCB
      // and now any other param names, with default values supplied
      // note that the default value also tells Ergogen the param's type
      // switch button
        from: undefined,
        to: undefined,
        XREF: undefined,
        YREF: undefined,
        VCC: undefined,
        GND: undefined
    },
    body: p => {
      return `
      (footprint "Joystick"
        (layer "F.Cu")
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_circle
            (center 0 0)
            (end 1 0)
            (stroke
                (width 0.2)
                (type default)
            )
            (fill none)
            (layer "F.SilkS")
        )
        (fp_poly
            (pts
                (xy -4.75 -9.4) (xy 4.75 -9.4) (xy 4.75 -6.575) (xy 6.575 -6.575) (xy 6.575 -4.75) (xy 9.4 -4.75)
                (xy 9.4 4.75) (xy 6.575 4.75) (xy 6.575 6.575) (xy 4.3 6.575) (xy 4.3 11.6) (xy -4.3 11.6) (xy -4.3 6.575)
                (xy -6.575 6.575) (xy -6.575 -6.575) (xy -4.75 -6.575)
            )
            (stroke
                (width 0.2)
                (type solid)
            )
            (fill none)
            (layer "F.SilkS")
        )
        (fp_circle
            (center 0 0)
            (end 12 0)
            (stroke
                (width 0.1)
                (type default)
            )
            (fill none)
            (layer "F.Fab")
        )
        (pad "" thru_hole circle
            (at -6.325 -5)
            (size 2.55 2.55)
            (drill 1.55)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
        )
        (pad "" thru_hole circle
            (at -6.325 5)
            (size 2.55 2.55)
            (drill 1.55)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
        )
        (pad "" thru_hole circle
            (at 6.325 -5)
            (size 2.55 2.55)
            (drill 1.55)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
        )
        (pad "" thru_hole circle
            (at 6.325 5)
            (size 2.55 2.55)
            (drill 1.55)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
        )
        (pad "1" thru_hole circle
            (at 2.5 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.GND}
        )
        (pad "1'" thru_hole circle
            (at 8.73 2.5)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.GND}
        )
        (pad "2" thru_hole circle
            (at 0 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.XREF}
        )
        (pad "2'" thru_hole circle
            (at 8.73 0)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.YREF}
        )
        (pad "3" thru_hole circle
            (at -2.5 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.VCC}
        )
        (pad "3'" thru_hole circle
            (at 8.73 -2.5)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.VCC}
        )
        (pad "a" thru_hole circle
            (at -3.25 5.75)
            (size 2.25 2.25)
            (drill 1.25)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.from}
        )
        (pad "b" thru_hole circle
            (at 3.25 5.75)
            (size 2.25 2.25)
            (drill 1.25)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.from}
        )
        (pad "c" thru_hole circle
            (at -3.25 10.25)
            (size 2.25 2.25)
            (drill 1.25)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.to}
        )
        (pad "d" thru_hole circle
            (at 3.25 10.25)
            (size 2.25 2.25)
            (drill 1.25)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.to}
        )
    )
      `
    }
}