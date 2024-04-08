
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sat, 06 Apr 2024 15:58:35 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
TokenColorBaseWhite,
TokenColorBaseRed,
TokenColorBaseGreen,
TokenColorBaseSuccess
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
