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
        GND: undefined,
        // This pin is vcc in F and gnd in B
        joy_x_3: { type: 'net', value: 'J_X_3' },
        // This pin is gnd in F and vcc in B
        joy_x_1: { type: 'net', value: 'J_X_1' }
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
            (layers "*.SilkS")
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
        (fp_poly
            (pts
                (xy 4.75 -9.4) (xy -4.75 -9.4) (xy -4.75 -6.575) (xy -6.575 -6.575) (xy -6.575 -4.75) (xy -9.4 -4.75)
                (xy -9.4 4.75) (xy -6.575 4.75) (xy -6.575 6.575) (xy -4.3 6.575) (xy -4.3 11.6) (xy 4.3 11.6) (xy 4.3 6.575)
                (xy 6.575 6.575) (xy 6.575 -6.575) (xy 4.75 -6.575)
            )
            (stroke
                (width 0.2)
                (type solid)
            )
            (fill none)
            (layer "B.SilkS")
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
        (pad "1A" thru_hole circle
            (at 2.5 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.joy_x_1}
        )
        (pad "1B" thru_hole circle
            (at 8.73 2.5)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.GND}
        )
        (pad "1C" thru_hole circle
            (at -8.73 2.5)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.GND}
        )
        (pad "2A" thru_hole circle
            (at 0 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.XREF}
        )
        (pad "2B" thru_hole circle
            (at 8.73 0)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.YREF}
        )
        (pad "2C" thru_hole circle
            (at -8.73 0)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.YREF}
        )
        (pad "3A" thru_hole circle
            (at -2.5 -8.73)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.joy_x_3}
        )
        (pad "3B" thru_hole circle
            (at 8.73 -2.5)
            (size 2.05 2.05)
            (drill 1.05)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (solder_mask_margin 0.1)
            ${p.VCC}
        )
        (pad "3C" thru_hole circle
            (at -8.73 -2.5)
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

        ${'' /* FRONT */}
        (pad 1 smd rect (at 2.5 -5 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.joy_x_1})
        (pad 1 smd rect (at 2.5 -4 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.GND})

        (pad 2 smd rect (at -2.5 -5 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.joy_x_3})
        (pad 2 smd rect (at -2.5 -4 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.VCC})

        ${'' /* BACK */}
        (pad 1 smd rect (at 2.5 -5 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.joy_x_1})
        (pad 1 smd rect (at 2.5 -4 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.VCC})

        (pad 2 smd rect (at -2.5 -5 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.joy_x_3})
        (pad 2 smd rect (at -2.5 -4 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.GND})
    )
        ${'' /* FRONT */}
        ${'' /* top to solder pad */}
        (segment (start ${p.eaxy(-2.5, -8.73)}) (end ${p.eaxy(-2.5, -5)}) (width 0.4) (layer "F.Cu"))
        (segment (start ${p.eaxy(2.5, -8.73)}) (end ${p.eaxy(2.5, -5)}) (width 0.4) (layer "F.Cu"))

        ${'' /* solder pad to pins, pin 3 */}
        (segment (start ${p.eaxy(-2.5, -4)}) (end ${p.eaxy(-4, -2.5)}) (width 0.4) (layer "F.Cu"))
        (segment (start ${p.eaxy(-4, -2.5)}) (end ${p.eaxy(-8.73, -2.5)}) (width 0.4) (layer "F.Cu"))

        ${'' /* solder pad to pins, pin 1 */}
        (segment (start ${p.eaxy(2.5, -4)}) (end ${p.eaxy(2.5, -3.73)}) (width 0.4) (layer "F.Cu"))
        (segment (start ${p.eaxy(2.5, -3.73)}) (end ${p.eaxy(8.73, 2.5)}) (width 0.4) (layer "F.Cu"))

        ${'' /* BACK */}
        ${'' /* top to solder pad */}
        (segment (start ${p.eaxy(-2.5, -8.73)}) (end ${p.eaxy(-2.5, -5)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(2.5, -8.73)}) (end ${p.eaxy(2.5, -5)}) (width 0.4) (layer "B.Cu"))

        ${'' /* solder pad to pins, pin 3 */}
        (segment (start ${p.eaxy(2.5, -4)}) (end ${p.eaxy(4, -2.5)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(4, -2.5)}) (end ${p.eaxy(8.73, -2.5)}) (width 0.4) (layer "B.Cu"))

        ${'' /* solder pad to pins, pin 1 */}
        (segment (start ${p.eaxy(-2.5, -4)}) (end ${p.eaxy(-2.5, -3.73)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(-2.5, -3.73)}) (end ${p.eaxy(-8.73, 2.5)}) (width 0.4) (layer "B.Cu"))

      `
    }
}