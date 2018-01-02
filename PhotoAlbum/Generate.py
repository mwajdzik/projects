#!/usr/bin/env python

import csv
import os
import re
import sys
from string import Template

bigItem = Template("""
            <div class="item">
                <div class="item-content">
                    <div class="thumbnail">
                        <img src="../img/$imgName1" class="$className1">
                    </div>
                </div>
            </div>""")

mediumItem = Template("""
            <div class="item">
                <div class="item-content">
                    <div class="thumbnail">
                        <img src="../img/$imgName1" class="$className1">
                    </div>
                    <div class="thumbnail">
                        <img src="../img/$imgName2" class="$className2">
                    </div>
                </div>
            </div>""")

mediumSmallItem = Template("""
            <div class="item">
                <div class="item-content-half-top" style="height: 60%;">
                    <div class="thumbnail">
                        <img src="../img/$imgName1" class="$className1">
                    </div>
                </div>
                <div class="item-content-half-bottom" style="height: 40%;">
                    <div class="thumbnail">
                        <img src="../img/$imgName3" class="$className3">
                    </div>
                    <div class="thumbnail">
                        <img src="../img/$imgName4" class="$className4">
                    </div>
                </div>
            </div>""")

smallItem = Template("""
            <div class="item">
                <div class="item-content-half-top">
                    <div class="thumbnail">
                        <img src="../img/$imgName1" class="$className1">
                    </div>
                    <div class="thumbnail">
                        <img src="../img/$imgName2" class="$className2">
                    </div>
                </div>
                <div class="item-content-half-bottom">
                    <div class="thumbnail">
                        <img src="../img/$imgName3" class="$className3">
                    </div>
                    <div class="thumbnail">
                        <img src="../img/$imgName4" class="$className4">
                    </div>
                </div>
            </div>""")


def parse(s):
    if "srednie pion" in s:
        type = "mediumV"
    elif "srednie" in s:
        type = "mediumH"
    elif "duze pion" in s:
        type = "bigV"
    elif "duze" in s:
        type = "bigH"
    else:
        type = "smallH"

    matcher = re.search('[RZ]\\d+\\.jpg', s)

    if matcher:
        return (matcher.group(0), type)
    else:
        return None


def main():
    args = sys.argv[1:]

    if len(args) > 1:
        input_file = args[0]
        output_dir = args[1]
    elif len(args) > 0:
        input_file = args[0]
        output_dir = raw_input("Enter in the output directory: ")
    else:
        input_file = raw_input("Enter in the input file: ")
        output_dir = raw_input("Enter in the output directory: ")

    if not os.path.isfile(input_file):
        raise IOError("Input file does not exists")
    elif not input_file.endswith(".csv"):
        raise IOError("Input file must have .csv formatting")
    elif not os.path.isdir(output_dir):
        os.makedirs(output_dir)

    cost = 0
    items = []

    with open(input_file, "r") as csv_file:
        file = csv.reader(csv_file, dialect=csv.excel_tab, delimiter=',')
        reader = list(file)[1:]

        for idx, row in enumerate(reader):
            conf = (parse(row[0]), parse(row[1]), parse(row[2]), parse(row[3]))

            try:
                if conf[0] == None:
                    pass
                elif conf[1] == None:
                    cost += 7
                    items.append(bigItem.substitute(imgName1=conf[0][0], className1=conf[0][1]))
                elif conf[2] == None:
                    cost += 2 * 2.8
                    items.append(mediumItem.substitute(imgName1=conf[0][0], className1=conf[0][1],
                                                       imgName2=conf[1][0], className2=conf[1][1]))
                elif conf[3] == None:
                    cost += 1 * 2.8 + 2 * 1.2
                    items.append(mediumSmallItem.substitute(imgName1=conf[0][0], className1=conf[0][1],
                                                            imgName3=conf[1][0], className3=conf[1][1],
                                                            imgName4=conf[2][0], className4=conf[2][1]))
                else:
                    cost += 4 * 1.2
                    items.append(smallItem.substitute(imgName1=conf[0][0], className1=conf[0][1],
                                                      imgName2=conf[1][0], className2=conf[1][1],
                                                      imgName3=conf[2][0], className3=conf[2][1],
                                                      imgName4=conf[3][0], className4=conf[3][1]))
            except:
                print(conf)

    items[0] = items[0].replace('class="item"', 'class="active item"')

    with open("%s/album.html" % (output_dir), 'w') as out_file:
        html_template = Template(open('./templates/template.html', 'r').read())
        html = html_template.substitute(ITEMS="\n".join(items))
        out_file.write(html)

    print "Final cost: " + str(cost) + " zl"


if __name__ == "__main__": main()
